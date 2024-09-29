import * as wasm from './gen_bg.wasm.js'
import { __wbg_set_wasm } from './gen_bg.js'
__wbg_set_wasm(wasm)
export * from './gen_bg.js'
