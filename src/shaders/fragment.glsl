uniform vec3 uColor;

varying vec3 vPosition;
varying float vOffset;
varying vec2 vUv;

void main() {
    vec3 positionColor = (vPosition + 0.5 - vOffset * 0.5);

    gl_FragColor = vec4(positionColor + uColor, 1.0);

}