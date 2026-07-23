import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function LayerCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const wrap = canvas.parentElement
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100)
    camera.position.set(0, 1.2, 9)

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    scene.add(new THREE.AmbientLight(0xffffff, 0.55))
    const key = new THREE.PointLight(0x5fd4c8, 1.1, 30)
    key.position.set(4, 6, 6)
    scene.add(key)
    const rim = new THREE.PointLight(0xe8934a, 0.9, 30)
    rim.position.set(-5, -3, 4)
    scene.add(rim)

    const group = new THREE.Group()
    scene.add(group)

    const layerDefs = [{ color: 0x3e6b99 }, { color: 0x5fd4c8 }, { color: 0xe8934a }, { color: 0xc9556f }]
    const width = 3.4
    const depth = 3.4
    const thickness = 0.34
    const layers = []

    layerDefs.forEach((def, i) => {
      const geo = new THREE.BoxGeometry(width - i * 0.18, thickness, depth - i * 0.18)
      const mat = new THREE.MeshStandardMaterial({
        color: def.color,
        transparent: true,
        opacity: 0.85,
        roughness: 0.4,
        metalness: 0.15,
      })
      const mesh = new THREE.Mesh(geo, mat)

      const edges = new THREE.EdgesGeometry(geo)
      const lineMat = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.35 })
      mesh.add(new THREE.LineSegments(edges, lineMat))

      const assembledY = (i - (layerDefs.length - 1) / 2) * (thickness + 0.06)
      const spreadY = (i - (layerDefs.length - 1) / 2) * 2.6
      const spreadX = (i % 2 === 0 ? -1 : 1) * (1.4 + i * 0.3)

      mesh.position.set(reduceMotion ? 0 : spreadX, spreadY, 0)
      mesh.userData = { assembledY }
      group.add(mesh)
      layers.push(mesh)
    })

    group.rotation.x = -0.3
    group.rotation.y = 0.5

    function resize() {
      const w = wrap.clientWidth
      const h = wrap.clientHeight
      renderer.setSize(w, h, false)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    }
    resize()
    window.addEventListener('resize', resize)

    let mouseX = 0
    let mouseY = 0
    function handleMouseMove(e) {
      const rect = wrap.getBoundingClientRect()
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2
      mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2
    }
    wrap.addEventListener('mousemove', handleMouseMove)

    const clock = new THREE.Clock()
    const assembleDuration = 1.6
    let frameId

    function animate() {
      frameId = requestAnimationFrame(animate)
      const t = clock.getElapsedTime()

      if (!reduceMotion) {
        const progress = Math.min(t / assembleDuration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        layers.forEach((mesh) => {
          mesh.position.y = THREE.MathUtils.lerp(
            mesh.position.y,
            mesh.userData.assembledY,
            progress < 1 ? eased * 0.18 + 0.02 : 1
          )
          mesh.position.x = THREE.MathUtils.lerp(mesh.position.x, 0, progress < 1 ? eased * 0.18 + 0.02 : 1)
        })
        group.rotation.y += 0.0018 + mouseX * 0.0006
        group.rotation.x = -0.3 + mouseY * 0.12
      }

      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('resize', resize)
      wrap.removeEventListener('mousemove', handleMouseMove)
      layers.forEach((mesh) => {
        mesh.geometry.dispose()
        mesh.material.dispose()
      })
      renderer.dispose()
    }
  }, [])

  return <canvas ref={canvasRef} id="layer-canvas"></canvas>
}
