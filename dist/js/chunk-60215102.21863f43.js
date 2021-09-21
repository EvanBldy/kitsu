(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-60215102"],{"2b61":function(a,e,t){"use strict";var s=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{class:{modal:!0,"is-active":a.active}},[t("div",{staticClass:"modal-background",on:{click:function(e){return a.$emit("cancel")}}}),t("div",{staticClass:"modal-content"},[t("div",{staticClass:"box content"},[t("h1",{staticClass:"title"},[a._v(" "+a._s(a.title)+" ")]),t("p",[a._v(" "+a._s(a.$t("main.csv.select_file"))+" ")]),t("file-upload",{ref:"uploadAvatarField",attrs:{label:a.$t("main.csv.upload_file"),accept:".png,.jpg,.jpeg"},on:{fileselected:a.onFileSelected}}),a.isError?t("p",{staticClass:"error"},[a._v(" "+a._s(a.$t("profile.avatar.error_upload"))+" ")]):a._e(),t("modal-footer",{attrs:{"error-text":a.$t("productions.metadata.error"),"is-loading":a.isLoading,"is-disabled":!a.formData},on:{confirm:a.onConfirmClicked,cancel:function(e){return a.$emit("cancel")}}})],1)])])},o=[],i=t("5530"),r=t("2f62"),n=t("d065"),l=t("4085"),c=t("d5c9"),d={name:"change-avatar-modal",mixins:[n["a"]],components:{FileUpload:l["a"],ModalFooter:c["a"]},props:["active","cancelRoute","isLoading","isError","title"],data:function(){return{formData:null}},computed:Object(i["a"])({},Object(r["c"])([])),methods:Object(i["a"])(Object(i["a"])({},Object(r["b"])([])),{},{onFileSelected:function(a){this.formData=a,this.$emit("fileselected",a)},onConfirmClicked:function(){this.$emit("confirm",this.formData)}}),watch:{active:function(){this.formData=null,this.$refs.uploadAvatarField.reset()}}},f=d,u=(t("6810"),t("0c7c")),p=Object(u["a"])(f,s,o,!1,null,"0203a630",null);e["a"]=p.exports},"421c":function(a,e,t){"use strict";t.r(e);var s=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"profile page"},[t("div",{staticClass:"profile-content"},[t("div",{staticClass:"has-text-centered profile-header"},[t("div",{staticClass:"profile-header-content has-text-centered"},[t("people-avatar",{ref:"avatar",attrs:{"no-cache":!0,person:this.user,size:150,"font-size":60}}),a.isLdap?a._e():t("p",[t("button",{staticClass:"button is-link change-avatar-button",on:{click:a.showAvatarModal}},[a._v(" "+a._s(a.$t("profile.change_avatar"))+" ")])]),t("h1",[a._v(" "+a._s(a.$t("profile.title"))+" ")])],1)]),t("div",{staticClass:"profile-body"},[t("h2",[a._v(" "+a._s(a.$t("profile.info_title"))+" ")]),t("text-field",{attrs:{label:a.$t("people.fields.first_name"),disabled:a.isLdap},model:{value:a.form.first_name,callback:function(e){a.$set(a.form,"first_name",e)},expression:"form.first_name"}}),t("text-field",{attrs:{label:a.$t("people.fields.last_name"),disabled:a.isLdap},model:{value:a.form.last_name,callback:function(e){a.$set(a.form,"last_name",e)},expression:"form.last_name"}}),t("text-field",{attrs:{label:a.$t("people.fields.email"),disabled:a.isLdap},model:{value:a.form.email,callback:function(e){a.$set(a.form,"email",e)},expression:"form.email"}}),t("text-field",{attrs:{label:a.$t("people.fields.phone")},model:{value:a.form.phone,callback:function(e){a.$set(a.form,"phone",e)},expression:"form.phone"}}),t("div",{staticClass:"field"},[t("label",{staticClass:"label"},[a._v(" "+a._s(a.$t("profile.timezone"))+" ")]),t("span",{staticClass:"select is-medium"},[t("select",{directives:[{name:"model",rawName:"v-model",value:a.form.timezone,expression:"form.timezone"}],on:{change:function(e){var t=Array.prototype.filter.call(e.target.options,(function(a){return a.selected})).map((function(a){var e="_value"in a?a._value:a.value;return e}));a.$set(a.form,"timezone",e.target.multiple?t:t[0])}}},a._l(a.timezones,(function(e){return t("option",{key:e},[a._v(" "+a._s(e)+" ")])})),0)])]),t("div",{staticClass:"field"},[t("label",{staticClass:"label"},[a._v(" "+a._s(a.$t("profile.language"))+" ")]),t("span",{staticClass:"select is-medium"},[t("select",{directives:[{name:"model",rawName:"v-model",value:a.form.locale,expression:"form.locale"}],domProps:{value:a.form.locale},on:{change:[function(e){var t=Array.prototype.filter.call(e.target.options,(function(a){return a.selected})).map((function(a){var e="_value"in a?a._value:a.value;return e}));a.$set(a.form,"locale",e.target.multiple?t:t[0])},a.localeChanged]}},[t("option",{attrs:{value:"zh_Hans_CN"}},[a._v("Chinese")]),t("option",{attrs:{value:"nl_NL"}},[a._v("Dutch")]),t("option",{attrs:{value:"en_US"}},[a._v("English")]),t("option",{attrs:{value:"fr_FR"}},[a._v("French")]),t("option",{attrs:{value:"de_DE"}},[a._v("German")]),t("option",{attrs:{value:"pt_BR"}},[a._v("Portuguese (Brasilian)")]),t("option",{attrs:{value:"fa_IR"}},[a._v("Persian")]),t("option",{attrs:{value:"es_ES"}},[a._v("Spanish")]),t("option",{attrs:{value:"ru_RU"}},[a._v("Russian")])])])]),t("div",{staticClass:"field"},[t("combobox-boolean",{attrs:{label:a.$t("profile.notifications_enabled")},model:{value:a.form.notifications_enabled,callback:function(e){a.$set(a.form,"notifications_enabled",e)},expression:"form.notifications_enabled"}})],1),t("div",{staticClass:"field"},[t("combobox-boolean",{attrs:{label:a.$t("profile.notifications_slack_enabled")},model:{value:a.form.notifications_slack_enabled,callback:function(e){a.$set(a.form,"notifications_slack_enabled",e)},expression:"form.notifications_slack_enabled"}})],1),"true"===a.form.notifications_slack_enabled?t("text-field",{attrs:{label:a.$t("profile.notifications_slack_user")},model:{value:a.form.notifications_slack_userid,callback:function(e){a.$set(a.form,"notifications_slack_userid",e)},expression:"form.notifications_slack_userid"}}):a._e(),t("button",{class:{button:!0,"save-button":!0,"is-medium":!0,"is-loading":a.isSaveProfileLoading},on:{click:function(e){return a.saveProfile({form:a.form})}}},[a._v(" "+a._s(a.$t("profile.save.button"))+" ")]),t("p",{class:{error:!0,"is-hidden":!a.isSaveProfileLoadingError}},[a._v(" "+a._s(a.$t("profile.save.error"))+" ")]),t("h2",[a._v(" "+a._s(a.$t("profile.password_title"))+" ")]),t("text-field",{attrs:{label:a.$t("people.fields.old_password"),type:"password"},model:{value:a.passwordForm.oldPassword,callback:function(e){a.$set(a.passwordForm,"oldPassword",e)},expression:"passwordForm.oldPassword"}}),t("text-field",{attrs:{label:a.$t("people.fields.password"),type:"password"},model:{value:a.passwordForm.password,callback:function(e){a.$set(a.passwordForm,"password",e)},expression:"passwordForm.password"}}),t("text-field",{attrs:{label:a.$t("people.fields.password_2"),type:"password"},model:{value:a.passwordForm.password2,callback:function(e){a.$set(a.passwordForm,"password2",e)},expression:"passwordForm.password2"}}),t("button",{class:{button:!0,"save-button":!0,"is-medium":!0,"is-loading":a.changePassword.isLoading},on:{click:function(e){return a.passwordChangeRequested()}}},[a._v(" "+a._s(a.$t("profile.change_password.button"))+" ")]),t("p",{class:{"change-password-message":!0,error:!0,"is-hidden":a.changePassword.isValid}},[a._v(" "+a._s(a.$t("profile.change_password.unvalid"))+" ")]),t("p",{class:{"change-password-message":!0,success:!0,"is-hidden":!a.changePassword.isSuccess}},[a._v(" "+a._s(a.$t("profile.change_password.success"))+" ")]),t("p",{class:{"change-password-message":!0,error:!0,"is-hidden":!a.changePassword.isError}},[a._v(" "+a._s(a.$t("profile.change_password.error"))+" ")])],1)]),t("change-avatar-modal",{attrs:{active:a.changeAvatar.isModalShown,"is-loading":a.changeAvatar.isLoading,"is-error":a.changeAvatar.isLoadingError,"form-data":a.changeAvatar.formData,title:a.$t("profile.avatar.title")},on:{fileselected:a.selectFile,confirm:a.uploadAvatarFile,cancel:a.hideAvatarModal}})],1)},o=[],i=t("5530"),r=(t("4de4"),t("7f45")),n=t.n(r),l=t("2f62"),c=t("4636"),d=t("2b61"),f=t("eb8c"),u=t("7bf8"),p={name:"profile",components:{ComboboxBoolean:c["a"],PeopleAvatar:f["a"],ChangeAvatarModal:d["a"],TextField:u["a"]},data:function(){return{form:{first_name:"",last_name:"",notifications_enabled:"false",notifications_slack_enabled:"false",notifications_slack_userid:"",email:"",phone:"",timezone:"Europe/Paris",locale:"French"},passwordForm:{oldPassword:"",password:"",password2:""},changeAvatar:{isModalShown:!1,isLoading:!1,isLoadingError:!1,formData:null}}},watch:{user:function(){Object.assign(this.form,this.user)}},computed:Object(i["a"])(Object(i["a"])({},Object(l["c"])(["changePassword","isCurrentUserAdmin","isLdap","isSaveProfileLoading","isSaveProfileLoadingError","user"])),{},{departments:function(){return[{name:"Animation"},{name:"Modeling"}]},timezones:function(){return n.a.tz.names().filter((function(a){return a.indexOf("/")>0&&a.indexOf("Etc")<0}))}}),methods:Object(i["a"])(Object(i["a"])({},Object(l["b"])(["saveProfile","checkNewPasswordValidityAndSave","uploadAvatar"])),{},{localeChanged:function(){this.$i18n.locale=this.form.locale.substring(0,2),"zh_Hans_CN"===this.form.locale?n.a.locale("zh_CN"):n.a.locale(this.form.locale.substring(0,2))},passwordChangeRequested:function(){var a=this;this.checkNewPasswordValidityAndSave({form:this.passwordForm,callback:function(){a.passwordForm={oldPassword:"",password:"",password2:""}}})},selectFile:function(a){this.$store.commit("CHANGE_AVATAR_FILE",a)},uploadAvatarFile:function(){var a=this;this.changeAvatar.isLoading=!0,this.changeAvatar.isError=!1,this.uploadAvatar((function(e){e&&(a.changeAvatar.isError=!0),a.changeAvatar.isLoading=!1,a.$refs.avatar.reloadAvatar(),a.hideAvatarModal()}))},hideAvatarModal:function(){this.changeAvatar.isModalShown=!1},showAvatarModal:function(){this.changeAvatar.isModalShown=!0}}),mounted:function(){this.form=Object.assign(this.form,this.user),this.form.notifications_enabled=this.form.notifications_enabled?"true":"false",this.form.notifications_slack_enabled=this.form.notifications_slack_enabled?"true":"false"},metaInfo:function(){return{title:"".concat(this.$t("profile.title")," - Kitsu")}}},m=p,v=(t("7bbd"),t("0c7c")),_=Object(v["a"])(m,s,o,!1,null,"bc32b90c",null);e["default"]=_.exports},6810:function(a,e,t){"use strict";t("8d44")},"7bbd":function(a,e,t){"use strict";t("aca0")},"8d44":function(a,e,t){},aca0:function(a,e,t){}}]);
//# sourceMappingURL=chunk-60215102.21863f43.js.map