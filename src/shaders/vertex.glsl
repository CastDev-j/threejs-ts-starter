uniform float uTime;

varying vec3 vPosition;

void main() {
    vec3 localPosition = position;

    float wave = sin(uTime + position.x * 0.5) * cos(uTime + position.z * 0.5) * 0.35;
    localPosition.y += wave;

    vPosition = localPosition;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}