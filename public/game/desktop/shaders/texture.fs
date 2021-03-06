//this ifdef is a temporary work-around for the (upcoming) strict shader validator
#ifdef GL_ES
  precision mediump float;
#endif

varying vec2 vTextureCoord;
uniform sampler2D uSampler;
  
void main(void)
{
    gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));
}
