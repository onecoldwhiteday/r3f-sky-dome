  // The role of the Fragment Shader is to set the color of each visible pixel of a geometry.

precision highp float;

uniform sampler2D u_texture; // <---------------------------------- texture sampler uniform

varying vec2 vUv;

void main(){
    gl_FragColor = texture2D(u_texture, vUv);
}