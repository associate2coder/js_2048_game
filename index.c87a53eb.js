var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},r={},t=e.parcelRequire7b01;null==t&&((t=function(e){if(e in i)return i[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return i[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,i){r[e]=i},e.parcelRequire7b01=t),(0,t.register)("ahdtQ",function(e,i){Object.defineProperty(e.exports,"default",{get:function(){return r},set:void 0,enumerable:!0,configurable:!0});var r={WIN_VALUE:2048,STATUS:{idle:"idle",playing:"playing",win:"win",lose:"lose"},DIRECTION:{left:"left",right:"right",up:"up",down:"down",isAxisX(e){return e===this.left||this.right},isReverseDirection(e){return e===this.right||this.down}},INITIAL_STATE:[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],PROBABILITY_FOR_FOUR:.1,FIELD_SIZE:4,WIN_STATE_TEST:[[0,2,4,8],[16,32,64,128],[256,512,1024,1024],[0,2,4,8]],LOSE_STATE_TEST:[[16,32,64,128],[128,512,256,16],[16,32,64,128],[512,0,0,0]]}}),t("ahdtQ");
//# sourceMappingURL=index.c87a53eb.js.map
