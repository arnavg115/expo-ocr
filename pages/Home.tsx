import React, { useState, useEffect } from "react";
import { Button, Image, View, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { decode } from "base64-arraybuffer";
import { supabase } from "../lib/supabase";
import { uuidGen } from "../lib/utils";

export default function Home() {
  const [image, setImage] = useState<null | ImagePicker.ImagePickerResult>(
    null
  );

  useEffect(() => {
    (async () => {
      await gainPermissions();
    })();
  }, []);
  async function gainPermissions() {
    if (Platform.OS !== "web") {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({ base64: true });

    if (!result.cancelled) {
      setImage(result);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && !image.cancelled ? (
        <View>
          <Image
            source={{ uri: image.cancelled ? "" : image.uri }}
            style={{ width: 200, height: 200 }}
          />
          <Button
            title="Upload"
            onPress={async () => {
              if (Platform.OS !== "web") {
                const uuid = await uuidGen();
                const { error, data } = await supabase.storage
                  .from("image-bucket")
                  .upload(uuid + ".jpg", decode(image.base64!), {
                    contentType: "image/jpg",
                  });
                console.log(error || data);
              }
            }}
          />
        </View>
      ) : null}
    </View>
  );
}
