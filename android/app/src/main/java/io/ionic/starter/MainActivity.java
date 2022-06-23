package io.ionic.starter;

import android.os.Bundle;

import com.epicshaggy.biometric.NativeBiometric;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    this.registerPlugin(NativeBiometric.class);
  }
}
