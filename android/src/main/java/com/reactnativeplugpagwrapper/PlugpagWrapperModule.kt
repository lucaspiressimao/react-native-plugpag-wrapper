package com.reactnativeplugpagwrapper

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise

import android.os.Environment

import br.com.uol.pagseguro.plugpagservice.wrapper.PlugPag

class PlugpagWrapperModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    var context: ReactApplicationContext = reactContext
    var absolutePath: String = Environment.getExternalStorageDirectory().getAbsolutePath()
    var plugPag: PlugPag = PlugPag(reactContext)

    override fun getName(): String {
        return "PlugpagWrapper"
    }

    @ReactMethod
    fun getAbsolutePath(promise: Promise) {
      promise.resolve(absolutePath)
    }

    @ReactMethod
    fun getApplicationCode(promise: Promise) {
      promise.resolve(plugPag.getApplicationCode())
    }

    @ReactMethod
    fun getLibVersion(promise: Promise) {
      promise.resolve(plugPag.getLibVersion())
    }

}
