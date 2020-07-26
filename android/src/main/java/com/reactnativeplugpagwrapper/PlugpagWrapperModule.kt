package com.reactnativeplugpagwrapper

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise

import br.com.uol.pagseguro.plugpagservice.wrapper.PlugPag

class PlugpagWrapperModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    var context = reactContext

    override fun getName(): String {
        return "PlugpagWrapper"
    }

    // Example method
    // See https://facebook.github.io/react-native/docs/native-modules-android
    @ReactMethod
    fun getPlugPagVersion(promise: Promise) {
      var plugPag = PlugPag(this.context)
      promise.resolve(plugPag.getLibVersion())
    }


}
