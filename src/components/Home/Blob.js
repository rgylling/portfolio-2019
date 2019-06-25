import React from 'react'
import * as THREE from 'three'
const noise = require('../../libs/perlin.js')

const Blob = () => {
  React.useEffect(() => {
    let renderer = new THREE.WebGLRenderer(
      {
        canvas: document.getElementById('canvas'), // TODO: get this from refs
        antialias: true,
        alpha: true
      }
    )

    renderer.setClearColor(0x000000, 0)

    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(1000, 500)
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap

    let scene = new THREE.Scene()
    let camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 5

    let light = new THREE.PointLight(0xffffff, 1, 100)
    light.position.set(10, 0, 10)
    light.castShadow = true
    scene.add(light)

    let sphere_geometry = new THREE.SphereGeometry(1, 128, 128)
    let material = new THREE.MeshPhongMaterial(
      {
        color: 0x222222,
        shininess: 500
      }
    )
    let sphere = new THREE.Mesh(sphere_geometry, material)
    sphere.material.wrapRGB.add(0x000000)
    sphere.castShadow = true
    scene.add(sphere)

    let update = function () {
      const { geometry } = sphere
      let time = performance.now() * 0.0003

      let k = 1.2
      geometry.vertices.forEach((p) => {
        p.normalize().multiplyScalar(1 + 0.3 * noise.noise.perlin3(p.x * k + time, p.y * k, p.z * k + time))
      })
      geometry.computeVertexNormals()
      geometry.normalsNeedUpdate = true
      geometry.verticesNeedUpdate = true
    }

    function animate () {
      // sphere.rotation.x += 0.01
      // sphere.rotation.y += 0.01

      update()
      renderer.render(scene, camera)
      requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }, [])
  return (
    <React.Fragment>
      <canvas id='canvas' />
    </React.Fragment>

  )
}

export default Blob
