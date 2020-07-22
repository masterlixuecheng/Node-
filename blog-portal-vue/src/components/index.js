import Vue from "vue"
import Tinymce from "./Tinymce/Tinymce.vue"
import imgUpload from "./img-upload.vue"
import imgUploadPreview from "./img-upload-preview.vue"
import fileUpload from "./file-upload.vue"
import logoUpload from "./logo-upload.vue"

Vue.component("Tinymce", Tinymce)
Vue.component("img-upload", imgUpload)
Vue.component("img-upload-preview", imgUploadPreview)
Vue.component("file-upload", fileUpload)
Vue.component("logo-upload", logoUpload)
