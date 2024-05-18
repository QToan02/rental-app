package com.readyrental

import android.content.Intent
import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import org.devio.rn.splashscreen.SplashScreen

class SplashActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        val intent = Intent(this, MainActivity::class.java)
        startActivity(intent)
        finish()
    }
}