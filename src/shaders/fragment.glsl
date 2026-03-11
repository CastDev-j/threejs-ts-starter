uniform vec3 uColor;

varying vec3 vPosition;
varying vec2 vUv;

void main() {
    vec3 positionColor = (vPosition);

    gl_FragColor = vec4(uColor + positionColor, 1.0);

}