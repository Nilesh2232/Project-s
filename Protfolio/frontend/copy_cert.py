import os
import shutil

src = r"C:\Users\Nilesh\.cursor\projects\d-Course-Project-s-Protfolio\assets\c__Users_Nilesh_AppData_Roaming_Cursor_User_workspaceStorage_7c7a3ffb4fcc8a001b30ff0ad1141ef3_images_WhatsApp_Image_2026-09-15_at_10.09.58_AM-c49f24c4-8c92-4bf8-a597-6f618b9a8470.jpg"
dst = r"D:\Course\Project's\Protfolio\Protfolio\frontend\public\images\certificate-pyspiders.jpg"

os.makedirs(os.path.dirname(dst), exist_ok=True)
shutil.copy2(src, dst)

print("exists:", os.path.exists(dst))
print("size:", os.path.getsize(dst), "bytes")
print("path:", dst)
