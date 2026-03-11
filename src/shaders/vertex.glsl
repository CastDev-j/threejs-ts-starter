uniform float uTime;

varying vec3 vPosition;
varying vec2 vUv;

void main() {
    vec3 localPosition = position;
    float radius = 10.0;

    float wave = sin(uTime + position.x * 0.5) * cos(uTime + position.z * 0.5) * 1.5 - 0.5;

    localPosition.y += wave;

    vPosition = localPosition;
    vUv = uv;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(localPosition, 1.0);

}