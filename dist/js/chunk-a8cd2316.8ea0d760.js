(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a8cd2316"],{"1ddd6":function(e,t,i){},"394a":function(e,t,i){},"499b":function(e,t,i){"use strict";i("394a")},"663a":function(e,t,i){"use strict";i("a886")},"8f49":function(e,t,i){"use strict";i("1ddd6")},"99a3":function(e,t,i){"use strict";i.r(t);var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"page fixed-page"},[i("div",{staticStyle:{"overflow-y":"auto"}},[i("div",{staticClass:"page-header"},[e.currentTask?i("div",{staticClass:"flexrow header-title"},[i("router-link",{staticClass:"flexrow-item has-text-centered back-link",attrs:{to:e.entityPage}},[i("chevron-left-icon")],1),i("div",{staticClass:"title flexrow-item"},[i("router-link",{attrs:{to:e.taskEntityPath}},[e._v(" "+e._s(e.currentTask?e.title:"Loading...")+" ")])],1),e.currentTaskType?i("task-type-name",{staticClass:"flexrow-item task-type",attrs:{"task-type":e.currentTaskType,"production-id":e.currentProduction.id}}):e._e(),e.isAssigned?e._e():i("subscribe-button",{staticClass:"flexrow-item action-button",attrs:{subscribed:e.isAssigned||e.isSubscribed},on:{click:e.toggleSubscribe}})],1):e._e(),e.currentTask?i("div",{staticClass:"flexrow task-information"},[i("span",{staticClass:"flexrow-item"},[e._v(e._s(e.$t("tasks.current_status")))]),e.currentTask?i("validation-tag",{staticClass:"is-medium flexrow-item",attrs:{task:e.currentTask,"is-static":!0}}):e._e(),i("span",{staticClass:"flexrow-item"},[e._v(e._s(e.$t("tasks.fields.assignees"))+":")]),e._l(e.currentTask.assignees,(function(t){return i("span",{key:t,staticClass:"flexrow-item avatar-wrapper"},[i("people-avatar",{key:t,staticClass:"flexrow-item",attrs:{person:e.personMap.get(t),size:30,"font-size":16}})],1)}))],2):e._e()]),i("div",{ref:"task-columns",staticClass:"task-columns"},[i("div",{staticClass:"task-column comments-column"},[e.currentTask?i("div",[i("div",[e.isCommentingAllowed?i("add-comment",{ref:"add-comment",attrs:{"is-loading":e.loading.addComment,"is-error":e.errors.addComment,user:e.user,team:e.currentTeam,task:e.currentTask,"task-status":e.taskStatusForCurrentUser,"attached-file-name":e.attachedFileName,fps:parseInt(e.currentFps),time:e.currentTime,revision:e.currentRevision},on:{"add-comment":e.addComment,"add-preview":e.onAddPreviewClicked,"duplicate-comment":e.onDuplicateComment,"file-drop":e.selectFile}}):e._e(),e.currentTaskComments&&e.currentTaskComments.length>0?i("div",{staticClass:"comments"},e._l(e.currentTaskComments,(function(t,r){return i("comment",{key:t.id,attrs:{comment:t,task:e.currentTask,highlighted:!1,"current-user":e.user,editable:t.person&&e.user.id===t.person.id||e.isCurrentUserAdmin,"is-first":0===r,"is-last":r===e.pinnedCount,"is-change":e.isStatusChange(r)},on:{"ack-comment":e.ackComment,"pin-comment":e.onPinComment,"edit-comment":e.onEditComment,"delete-comment":e.onDeleteComment,"checklist-updated":e.saveComment,"time-code-clicked":e.timeCodeClicked}})})),1):i("div",{staticClass:"no-comment"},[i("em",[e._v(" "+e._s(e.$t("tasks.no_comment"))+" ")])])],1)]):i("div",{staticClass:"has-text-centered"},[i("spinner")],1)]),i("div",{staticClass:"task-column preview-column"},[i("div",{staticClass:"preview-column-content"},[i("div",{staticClass:"flexrow preview-header"},[i("h2",{staticClass:"subtitle flexrow-item"},[e._v(" "+e._s(e.$t("tasks.preview"))+" ")]),e.isPreviewButtonVisible?i("div",{staticClass:"set-main-preview flexrow-item flexrow pull-right"},[e.isPreviews&&e.isCurrentUserManager?i("button",{class:{button:!0,"flexrow-item":!0,"is-loading":e.loading.setPreview},on:{click:e.setPreview}},[i("image-icon",{staticClass:"icon"}),i("span",{staticClass:"text"},[e._v(" "+e._s(e.$t("tasks.set_preview"))+" ")])],1):e._e(),e.errors.setPreview?i("span",{staticClass:"error flexrow-item"},[e._v(" "+e._s(e.$t("tasks.set_preview_error"))+" ")]):e._e()]):e._e(),e.currentTask&&e.currentTask.entity&&e.currentTask.entity.preview_file_id===e.currentPreviewId?i("div",{staticClass:"set-main-preview flexrow-item pull-right"},[i("em",[e._v(e._s(e.$t("tasks.set_preview_done")))])]):e._e()]),e.isPreviews?i("div",{staticClass:"preview-list mt2"},e._l(e.currentTaskPreviews,(function(t){return i("preview-row",{key:t.id,attrs:{preview:t,"preview-path":e.previewPath(t.id),taskId:e.currentTask?e.currentTask.id:"",selected:t.id===e.currentPreviewId}})})),1):i("div",[i("em",[e._v(" "+e._s(e.$t("tasks.no_preview"))+" ")])]),i("div",{staticClass:"preview-area"},[e.isPreviews?i("div",[e.currentPreview?i("preview-player",{ref:"preview-player",attrs:{previews:e.currentPreview.previews,"task-type-map":e.taskTypeMap,"entity-preview-files":e.taskEntityPreviews,"read-only":e.isCurrentUserArtist,"last-preview-files":e.lastFivePreviews,task:e.currentTask},on:{"annotation-changed":e.onAnnotationChanged,"add-extra-preview":e.onAddExtraPreviewClicked,"remove-extra-preview":e.onRemoveExtraPreviewClicked,"change-current-preview":e.changeCurrentPreview,"time-updated":e.onTimeUpdated}}):e._e()],1):e._e()])])])]),i("add-preview-modal",{ref:"add-preview-modal",attrs:{active:e.modals.addPreview,"is-loading":e.loading.addPreview,"is-error":e.errors.addPreview,"form-data":e.addPreviewFormData},on:{cancel:function(t){e.modals.addPreview=!1},fileselected:e.selectFile,confirm:e.closeAddPreviewModal}}),i("add-preview-modal",{ref:"add-extra-preview-modal",attrs:{active:e.modals.addExtraPreview,"is-loading":e.loading.addExtraPreview,"is-error":e.errors.addExtraPreview,"form-data":e.addExtraPreviewFormData},on:{cancel:e.hideExtraPreviewModal,fileselected:e.selectFile,confirm:e.createExtraPreview}}),i("edit-comment-modal",{attrs:{active:e.modals.editComment,"is-loading":e.loading.editComment,"is-error":e.errors.editComment,"comment-to-edit":e.commentToEdit,team:e.currentTeam},on:{confirm:e.confirmEditTaskComment,cancel:e.onCancelEditComment}}),i("delete-modal",{attrs:{active:e.modals.deleteComment,"is-loading":e.loading.deleteComment,"is-error":e.errors.deleteComment,text:e.$t("tasks.delete_comment"),"error-text":e.$t("tasks.delete_comment_error")},on:{confirm:e.confirmDeleteTaskComment,cancel:e.onCancelDeleteComment}}),i("delete-modal",{attrs:{active:e.modals.deleteExtraPreview,"is-loading":e.loading.deleteExtraPreview,"is-error":e.errors.deleteExtraPreview,text:e.$t("tasks.delete_preview"),"error-text":e.$t("tasks.delete_preview_error")},on:{cancel:e.hideRemoveExtraPreviewModal,confirm:e.confirmDeleteTaskPreview}})],1)])},s=[],n=i("53ca"),a=i("5530"),o=(i("caad"),i("7db0"),i("b0c0"),i("fb6a"),i("c740"),i("a15b"),i("a434"),i("ac1f"),i("1276"),i("99af"),i("d81d"),i("4de4"),i("2532"),i("2f62")),d=i("0a35"),c=i("6be5"),u=i("ee35"),m=i("8bd9"),l=i("5f48"),h=i("5b23"),v=i("eb8c"),k=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{class:{"preview-row":!0,"has-text-center":!0,selected:e.selected}},[i("button-link",{attrs:{text:e.label,path:e.previewPath}})],1)},p=[],w=i("e211"),f={name:"preview-row",components:{ButtonLink:w["a"]},props:{preview:{type:Object,default:function(){}},selected:{type:Boolean,default:!1},previewPath:{type:Object,default:function(){}}},computed:{label:function(){var e="v".concat(this.preview.revision);return e}},methods:{}},T=f,C=(i("499b"),i("0c7c")),P=Object(C["a"])(T,k,p,!1,null,"e5b09c1e",null),g=P.exports,_=i("be83"),y=i("d228"),x=i("274f"),E=i("fe13"),b=i("6aac"),I={name:"task",components:{AddComment:c["a"],AddPreviewModal:u["a"],Comment:m["a"],ChevronLeftIcon:d["j"],DeleteModal:l["a"],EditCommentModal:h["a"],ImageIcon:d["z"],PeopleAvatar:v["a"],PreviewRow:g,PreviewPlayer:b["a"],Spinner:_["a"],SubscribeButton:y["a"],TaskTypeName:x["a"],ValidationTag:E["a"]},data:function(){return{attachedFileName:"",currentTime:0,entityPage:this.getEntityPage(),selectedTab:"validation",taskLoading:{isLoading:!0,isError:!1},modals:{addPreview:!1,addExtraPreview:!1,deleteExtraPreview:!1,deleteTask:!1,deleteComment:!1,editComment:!1},loading:{addComment:!1,addPreview:!1,addExtraPreview:!1,setPreview:!1,deleteTask:!1,deleteComment:!1,editComment:!1},errors:{addComment:!1,addPreview:!1,addExtraPreview:!1,setPreview:!1,deleteTask:!1,deleteComment:!1,editComment:!1},currentTask:null,currentTaskComments:[],currentTaskPreviews:[],commentToEdit:null,addPreviewFormData:null,addExtraPreviewFormData:null,isSubscribed:!1}},created:function(){this.clearSelectedTasks(),this.loadTaskData()},mounted:function(){var e=this;this.reset(),this.$nextTick((function(){e.$refs["task-columns"]&&(e.$refs["task-columns"].scrollTop=100,window.scrollTo(0,0))}))},computed:Object(a["a"])(Object(a["a"])({},Object(o["c"])(["currentEpisode","currentProduction","displayedShots","displayedAssets","getTaskComments","getTaskPreviews","getTaskComment","isCurrentUserAdmin","isCurrentUserArtist","isCurrentUserManager","isSingleEpisode","isTVShow","personMap","productionMap","route","taskEntityPreviews","taskStatus","taskStatusForCurrentUser","taskMap","taskTypeMap","user"])),{},{isPreviewButtonVisible:function(){return this.currentTask&&this.currentTask.entity&&this.currentTask.entity.preview_file_id!==this.currentPreviewId&&["png","mp4"].includes(this.extension)},extension:function(){return this.currentPreview?this.currentPreview.extension:""},currentPreviewId:function(){return this.currentPreview?this.currentPreview.id:""},currentPreview:function(){if(this.isPreviews){var e=this.currentTaskPreviews[0],t=this.route.params.preview_id;return t&&(e=this.currentTaskPreviews.find((function(e){return e.id===t}))),e}return null},currentFps:function(){return this.productionMap.get(this.currentTask.project_id).fps||"25"},currentRevision:function(){return this.currentPreview?this.currentPreview.revision:0},isCommentingAllowed:function(){var e=this;return this.isCurrentUserManager||this.currentTask.assignees.find((function(t){return t===e.user.id}))},taskTypeBorder:function(){var e="transparent";return this.currentTask&&(e=this.currentTask.task_type_color),{"border-left":"4px solid ".concat(e)}},deleteTaskPath:function(){return this.taskPath(this.currentTask,"task-delete")},isPreviews:function(){return this.currentTaskPreviews&&this.currentTaskPreviews.length>0},taskEntityPath:function(){if(this.currentTask){var e=this.currentTask.entity_type_name,t="";t=this.currentTask.entity?this.currentTask.entity.id:this.currentTask.entity_id;var i={name:"Shot"===e?"shot":"asset",params:{production_id:this.currentTask.project_id}};return"Shot"===e?i.params.shot_id=t:i.params.asset_id=t,this.$route.params.episode_id&&(i.name="episode-".concat(i.name),i.params.episode_id=this.$route.params.episode_id),i}return{name:"open-productions"}},lastFivePreviews:function(){return this.currentTaskPreviews?this.currentTaskPreviews.slice(0,5):[]},entityList:function(){var e=this,t=this.displayedShots.find((function(t){return t.id===e.currentTask.entity_id}));return t?this.displayedShots:this.displayedAssets},previousEntity:function(){var e=this;if(!this.currentTask)return{name:"open-productions"};var t=function(){var t=e.currentTask.task_type_id,i=e.entityList.findIndex((function(t){return t.id===e.currentTask.entity_id})),r=!1,s=i-1;s<0&&(s=e.entityList.length-1);var n=null;while(!n){if(e.entityList[s]){var a=e.entityList[s];n=a.tasks.find((function(i){var r=e.taskMap.get(n);return!!r&&r.task_type_id===t}))}else n=e.currentTask.id;if(!n&&(s--,s<0)){if(s=e.entityList.length,r)return{v:null};r=!0}}return{v:e.taskPath({id:n})}}();return"object"===Object(n["a"])(t)?t.v:void 0},nextEntity:function(){var e=this;if(!this.currentTask)return{name:"open-productions"};var t=function(){var t=e.currentTask.task_type_id,i=!1,r=e.entityList.findIndex((function(t){return t.id===e.currentTask.entity_id})),s=r+1;s>=e.entityList.length&&(s=0);var n=null;while(!n){if(e.entityList[s]){var a=e.entityList[s];n=a.tasks.find((function(i){var r=e.taskMap.get(n);return!!r&&r.task_type_id===t}))}else n=e.currentTask.id;if(!n&&(s++,s>=e.entityList.length)){if(s=0,i)return{v:null};i=!0}}return{v:e.taskPath({id:n})}}();return"object"===Object(n["a"])(t)?t.v:void 0},previewPlayer:function(){return this.$refs["preview-player"]},title:function(){if(this.currentTask){var e=this.currentTask.entity_type_name,t=this.currentTask.full_entity_name||this.currentTask.entity_name;return this.isTVShow&&"Shot"===e&&(t=t.split("/").splice(1).join("/")),"".concat(t)}return"Loading..."},windowTitle:function(){if(this.currentTask){var e=this.currentTask.task_type_name;return"".concat(this.title," / ").concat(e)}return"Loading..."},deleteText:function(){if(this.currentTask){var e=this.taskTypeMap.get(this.currentTask.task_type_id);return this.$t("main.delete_text",{name:"".concat(this.currentTask.entity_name," / ").concat(e.name)})}return""},isAssigned:function(){var e=this;return!!this.currentTask&&this.currentTask.assignees.some((function(t){return t===e.user.id}))},currentTaskType:function(){return this.currentTask?this.taskTypeMap.get(this.currentTask.task_type_id):null},currentTeam:function(){var e=this;return this.currentProduction.team.map((function(t){return e.personMap.get(t)}))},pinnedCount:function(){return this.currentTaskComments.filter((function(e){return e.pinned})).length}}),methods:Object(a["a"])(Object(a["a"])({},Object(o["b"])(["ackComment","addCommentPreview","addCommentExtraPreview","commentTask","commentTaskWithPreview","changeCommentPreview","clearSelectedTasks","deleteTask","deleteTaskPreview","deleteTaskComment","editTaskComment","loadEpisodes","loadTask","loadShots","loadAssets","loadPreviewFileFormData","loadTaskComments","loadTaskSubscribed","refreshPreview","pinComment","subscribeToTask","setCurrentEpisode","unsubscribeFromTask","updatePreviewAnnotation"])),{},{getEntityPage:function(){if(this.currentTask){var e={name:this.$route.params.type,params:{production_id:this.currentTask.project_id}};return"asset"===e.name?e.params.asset_id=this.currentTask.entity_id:e.params.shot_id=this.currentTask.entity_id,this.isTVShow&&(e.name="episode-".concat(e.name),e.params.episode_id=this.currentEpisode?this.currentEpisode.id:this.$route.params.episode_id),e.query={search:""},e}return{name:"open-productions"}},loadTaskData:function(){var e=this,t=this.getCurrentTask();if(t){var i=this.route.params.task_id;this.currentTask=t,this.loadTaskComments({taskId:i,entityId:t.entity_id}).then((function(){return e.loadTaskSubscribed({taskId:i})})).then((function(t){e.isSubscribed=t,e.currentTaskComments=e.getCurrentTaskComments(),e.currentTaskPreviews=e.getCurrentTaskPreviews(),e.entityPage=e.getEntityPage()})).catch((function(t){console.error(t),e.taskLoading.isError=!0}))}else this.taskLoading={isLoading:!0,isError:!1},this.loadTask({taskId:this.route.params.task_id}).then((function(t){var i=function(t){e.loadAssets().then(t)};"Shot"===t.entity_type_name&&(i=function(i){e.loadEpisodes().then((function(){e.isTVShow&&e.setCurrentEpisode(t.episode.id),e.loadShots(i)})).catch(i)}),i((function(){e.currentTask=t,e.loadTaskComments({taskId:t.id,entityId:t.entity_id}).then((function(){return e.loadTaskSubscribed({taskId:t.id})})).then((function(t){e.isSubscribed=t,e.reset(),e.entityPage=e.getEntityPage(),e.taskLoading={isLoading:!1,isError:!1}})).catch((function(t){console.error(t),e.taskLoading={isLoading:!1,isError:!0}}))}))}))},getCurrentTask:function(){return this.taskMap.get(this.route.params.task_id)},getCurrentComment:function(){if(this.route.params.comment_id)return this.getTaskComment(this.route.params.task_id,this.route.params.comment_id)},getCurrentTaskComments:function(){return this.getTaskComments(this.route.params.task_id)},getCurrentTaskPreviews:function(){return this.getTaskPreviews(this.route.params.task_id)},addComment:function(e,t,i,r){var s=this,n={taskId:this.currentTask.id,taskStatusId:r,comment:e,checklist:i,attachment:t},a="commentTask";this.attachedFileName&&(a="commentTaskWithPreview"),this.loading.addComment=!0,this.errors.addComment=!1,this.$store.dispatch(a,n).then((function(){s.currentTaskPreviews=s.getCurrentTaskPreviews(),s.resetPreview(),s.$refs["add-preview-modal"].reset(),s.reset(),s.attachedFileName="",s.loading.addComment=!1})).catch((function(e){console.error(e),s.errors.addComment=!0,s.loading.addComment=!1}))},reset:function(){this.currentTaskComments=this.getCurrentTaskComments(),this.currentTaskPreviews=this.getCurrentTaskPreviews(),this.currentTask=this.getCurrentTask()},selectFile:function(e){this.loadPreviewFileFormData(e),this.attachedFileName=e.map((function(e){return e.get("file").name})).join(", ")},isHighlighted:function(e){return e.preview&&e.preview.id===this.currentPreviewId},createExtraPreview:function(){var e=this,t=this.currentTaskPreviews,i=t.length>0?t[0]:null;this.errors.addExtraPreview=!1,this.loading.addExtraPreview=!0;var r=this.getCurrentTaskComments().find((function(e){return e.previews.findIndex((function(e){return e.id===i.id}))>=0}));this.addCommentExtraPreview({taskId:this.currentTask.id,previewId:this.currentPreview.id,commentId:r.id}).then((function(){e.loading.addExtraPreview=!1,e.modals.addExtraPreview=!1,e.$refs["add-extra-preview-modal"].reset(),setTimeout((function(){e.previewPlayer.displayLast()}),0)})).catch((function(t){console.error(t),e.errors.addExtraPreview=!0,e.loading.addExtraPreview=!1}))},resetPreview:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=this.currentTaskPreviews,i=t.length>0?t[0]:null;this.currentTaskComments=this.getCurrentTaskComments(),this.currentTaskPreviews=this.getCurrentTaskPreviews(),i&&e&&this.$router.push(this.previewPath(i.id))},setPreview:function(){var e=this;this.loading.setPreview=!0,this.errors.setPreview=!1,this.$store.dispatch("setPreview",{taskId:this.currentTask.id,entityId:this.currentTask.entity.id,previewId:this.currentPreviewId}).then((function(){e.loading.setPreview=!1})).catch((function(t){console.error(t),e.errors.setPreview=!0}))},confirmEditTaskComment:function(e){var t=this;this.loading.editComment=!0,this.errors.editComment=!1,this.editTaskComment({taskId:this.currentTask.id,comment:e}).then((function(){t.loading.editComment=!1,t.modals.editComment=!1})).catch((function(e){console.error(e),t.errors.editComment=!0}))},saveComment:function(e,t){this.editTaskComment({taskId:this.currentTask.id,comment:e,checklist:t})},confirmDeleteTaskComment:function(){var e=this;this.loading.deleteComment=!0,this.errors.deleteComment=!1;var t=this.commentToEdit.id;this.deleteTaskComment({taskId:this.currentTask.id,commentId:t}).then((function(){e.loading.deleteComment=!1,e.reset(),e.isPreviews&&e.resetPreview(),e.modals.deleteComment=!1})).catch((function(t){console.error(t),e.loading.deleteComment=!1,e.errors.deleteComment=!0}))},confirmDeleteTaskPreview:function(){var e=this;this.loading.deleteExtraPreview=!0,this.errors.deleteExtraPreview=!1;var t=this.currentPreviewId,i=this.getCurrentTaskComments().find((function(e){return e.previews.findIndex((function(e){return e.id===t}))>=0}));this.previewPlayer.displayFirst(),this.deleteTaskPreview({taskId:this.currentTask.id,commentId:i.id,previewId:this.currentExtraPreviewId}).then((function(){e.loading.deleteExtraPreview=!1,e.resetPreview(),e.hideRemoveExtraPreviewModal()})).catch((function(t){console.error(t),e.loading.deleteExtraPreview=!1,e.errors.deleteExtraPreview=!0}))},onPreviewAdded:function(e){var t=e.task_id,i=e.comment_id,r=e.preview_file_id,s=e.revision,n=e.extension,a=this.$store.getters.getTaskComment(t,i);this.currentTask&&a&&(0===a.previews.length||a.previews[0].id!==r)&&t===this.currentTask.id&&(this.$store.commit("ADD_PREVIEW_END",{preview:{id:r,revision:s,extension:n},taskId:t,commentId:i,comment:a}),this.resetPreview())},toggleSubscribe:function(){this.currentTask&&!this.isAssigned&&(this.isSubscribed?(this.unsubscribeFromTask(this.currentTask.id),this.isSubscribed=!1):(this.subscribeToTask(this.currentTask.id),this.isSubscribed=!0))},taskPath:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"task";e?(e.project_id=this.currentTask.project_id,e.episode_id=this.currentTask.episode_id):e=this.currentTask;var i={name:"open-productions"};return e&&(i={name:t,params:{production_id:e.project_id,task_id:e.id}},this.isTVShow&&this.currentEpisode&&(i.name="episode-".concat(t),i.params.episode_id=e.episode_id||this.currentEpisode.id)),i},previewPath:function(e){var t=this.taskPath(this.currentTask,"task-preview");return t.params&&(t.params.preview_id=e),t},onAnnotationChanged:function(e){var t=e.preview,i=e.additions,r=e.deletions,s=e.updates,n=this.currentTask.id;this.updatePreviewAnnotation({taskId:n,preview:t,additions:i,deletions:r,updates:s})},onAddExtraPreviewClicked:function(){this.modals.addExtraPreview=!0},onRemoveExtraPreviewClicked:function(e){this.showRemoveExtraPreviewModal(e)},hideExtraPreviewModal:function(){this.modals.addExtraPreview=!1},showRemoveExtraPreviewModal:function(e){this.currentExtraPreviewId=e.id,this.modals.deleteExtraPreview=!0},hideRemoveExtraPreviewModal:function(){this.modals.deleteExtraPreview=!1},onAddPreviewClicked:function(){this.modals.addPreview=!0},closeAddPreviewModal:function(){this.modals.addPreview=!1},onDuplicateComment:function(e){this.$refs["add-comment"].setValue(e)},onPinComment:function(e){this.pinComment(e)},onEditComment:function(e){this.commentToEdit=e,this.modals.editComment=!0},onDeleteComment:function(e){this.commentToEdit=e,this.modals.deleteComment=!0},onCancelEditComment:function(e){this.modals.editComment=!1},onCancelDeleteComment:function(e){this.modals.deleteComment=!1},onTimeUpdated:function(e){this.currentTime=e},changeCurrentPreview:function(e){this.$router.push(this.previewPath(e.id))},onRemoteAcknowledge:function(e,t){if(this.currentTask){var i=this.currentTaskComments.find((function(t){return t.id===e.comment_id})),r=this.personMap.get(e.person_id);i&&r&&(this.user.id===r.id?("ack"===t&&!i.acknowledgements.includes(r.id)||"unack"===t&&i.acknowledgements.includes(r.id))&&this.$store.commit("ACK_COMMENT",{comment:i,user:r}):this.$store.commit("ACK_COMMENT",{comment:i,user:r}))}},isStatusChange:function(e){var t=this.currentTaskComments,i=t[e];return e===t.length-1||i.task_status_id!==t[e+1].task_status_id},timeCodeClicked:function(e){var t=this,i=e.versionRevision,r=e.minutes,s=e.seconds,n=e.milliseconds;e.frame;this.changeCurrentPreview(this.currentTaskPreviews.find((function(e){return e.revision===parseInt(i)})));var a=60*parseInt(r)+parseInt(s)+parseInt(n)/1e3;setTimeout((function(){t.previewPlayer.setCurrentTime(a),t.previewPlayer.focus()}),20)}}),watch:{$route:function(){this.$route.params.task_id!==this.currentTask.id&&this.loadTaskData()}},socket:{events:{"preview-file:add-file":function(e){this.onPreviewAdded(e)},"comment:acknowledge":function(e){this.onRemoteAcknowledge(e,"ack")},"comment:unacknowledge":function(e){this.onRemoteAcknowledge(e,"unack")}}},metaInfo:function(){var e="Loading task... - Kitsu";if(this.currentTask){var t=this.taskTypeMap.get(this.currentTask.task_type_id).name;e="".concat(this.title," / ").concat(t," - Kitsu")}return{title:e}}},S=I,$=(i("663a"),Object(C["a"])(S,r,s,!1,null,"447af5fc",null));t["default"]=$.exports},a886:function(e,t,i){},e211:function(e,t,i){"use strict";var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("router-link",{staticClass:"button",attrs:{title:e.title,to:e.path}},[e.icon.length>0&&e.icon.startsWith("fa")?i("span",{staticClass:"icon is-small"},[i("i",{class:"fa "+e.icon})]):e._e(),"plus"===e.icon?i("plus-icon",{class:{icon:!0,"is-small":!0,"only-icon":!e.isText}}):e._e(),"download"===e.icon?i("download-icon",{class:{icon:!0,"is-small":!0,"only-icon":!e.isText}}):e._e(),"upload"===e.icon?i("upload-icon",{class:{icon:!0,"is-small":!0,"only-icon":!e.isText}}):e._e(),"edit"===e.icon?i("edit-icon",{class:{icon:!0,"is-small":!0,"only-icon":!e.isText}}):e._e(),"delete"===e.icon?i("trash-icon",{class:{icon:!0,"is-small":!0,"only-icon":!e.isText}}):e._e(),"restore"===e.icon?i("rotate-ccw-icon",{class:{icon:!0,"is-small":!0,"only-icon":!e.isText}}):e._e(),e.isText?i("span",{class:{text:!0,"is-hidden-touch":e.isResponsive}},[e._v(" "+e._s(e.text)+" ")]):e._e()],1)},s=[],n=i("0a35"),a={name:"button-link",components:{DownloadIcon:n["q"],EditIcon:n["s"],PlusIcon:n["L"],RotateCcwIcon:n["O"],TrashIcon:n["W"],UploadIcon:n["Y"]},props:{text:{default:"",type:String},title:{default:"",type:String},path:{default:""},icon:{default:"",type:String},isResponsive:{default:!1,type:Boolean}},computed:{isText:function(){return this.text&&this.text.length>0}}},o=a,d=(i("8f49"),i("0c7c")),c=Object(d["a"])(o,r,s,!1,null,"143e1424",null);t["a"]=c.exports}}]);
//# sourceMappingURL=chunk-a8cd2316.8ea0d760.js.map