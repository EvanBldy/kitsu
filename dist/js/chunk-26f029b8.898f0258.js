(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-26f029b8"],{c52e:function(t,i,s){},d1e3:function(t,i,s){"use strict";s.r(i);var e=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"playlists page fixed-page dark"},[s("div",{staticClass:"columns"},[s("div",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onPlaylistListScroll,expression:"onPlaylistListScroll"}],ref:"playlistList",class:{"playlist-list-column":!0,column:!0,toggled:t.isListToggled}},[s("div",{staticClass:"flexrow top-section"},[t.isListToggled?t._e():s("combobox-task-type",{staticClass:"flexrow-item selector mb1",attrs:{"task-type-list":t.taskTypeList,label:t.$t("playlists.filter_task_type"),thin:!0},model:{value:t.taskTypeId,callback:function(i){t.taskTypeId=i},expression:"taskTypeId"}}),t.isListToggled?t._e():s("span",{staticClass:"filler"}),s("button-simple",{staticClass:"flexrow-item",staticStyle:{flex:"0"},attrs:{icon:t.isListToggled?"right":"left","is-small":""},on:{click:function(i){t.isListToggled=!t.isListToggled}}})],1),s("div",{staticClass:"flexrow"},[t.isListToggled?t._e():[s("combobox",{staticClass:"flexrow-item mb2",attrs:{label:t.$t("main.sorted_by"),options:t.sortOptions,"locale-key-prefix":"playlists.fields."},model:{value:t.currentSort,callback:function(i){t.currentSort=i},expression:"currentSort"}})]],2),t.isCurrentUserManager&&!t.isListToggled?s("button",{key:"new-playlist-button",class:{button:!0,"is-loading":t.loading.addPlaylist},on:{click:t.showAddModal}},[s("plus-icon",{staticClass:"icon is-small"}),t._v(" "+t._s(t.$t("playlists.new_playlist"))+" ")],1):t._e(),t.loading.playlists?s("spinner",{staticClass:"mt2"}):s("div",{staticClass:"playlists"},t._l(t.playlists,(function(i){return s("router-link",{key:i.id,class:{"playlist-item":!0,"for-client":i.for_client||!1,selected:i.id===t.currentPlaylist.id},style:t.playlistElementStyle(i),attrs:{to:t.getPlaylistPath(i.id)}},[t.isListToggled?s("div",{staticClass:"has-text-centered"},[s("light-entity-thumbnail",{attrs:{"preview-file-id":i.first_preview_file_id,type:"previews",width:"38px",height:"30px","max-width":"38px","max-height":"30px","empty-width":"38px","empty-height":"30px",title:i.name}})],1):s("div",[s("span",[t._v(" "+t._s(i.name)+" ")]),s("span",{staticClass:"playlist-date",attrs:{title:"last modified"}},[t._v(" "+t._s(t.$t("playlists.updated_at"))+" "+t._s(t.formatDate(i.updated_at))+" ")])])])})),1),t.errors.playlistLoading?s("error-text",{attrs:{text:"$t('playlists.loading_error')"}}):t._e()],1),t.playlists.length>0&&!t.currentPlaylist.id&&!t.loading.playlist?s("div",{staticClass:"playlist-column no-selection"},[s("h2",[t._v(t._s(t.$t("playlists.last_creation")))]),t.loading.playlists||t.loading.playlistsInit?s("spinner",{staticClass:"mt2"}):s("div",{staticClass:"flexrow"},t._l(t.lastPlaylistsCreated,(function(i){return s("router-link",{key:"recent-playlist-"+i.id,staticClass:"recent-playlist flexrow-item",attrs:{to:t.getPlaylistPath(i.id)}},[s("div",{staticClass:"has-text-centered"},[s("light-entity-thumbnail",{attrs:{"preview-file-id":i.first_preview_file_id,type:"previews",width:"auto",height:"auto","max-width":"300px","max-height":"150px","empty-height":"150px"}})],1),s("h3",[t._v(t._s(i.name))]),s("span",[t._v(" "+t._s(t.$t("playlists.created_at"))+" "+t._s(t.formatDate(i.created_at))+" ")])])})),1),s("h2",[t._v(t._s(t.$t("playlists.last_modification")))]),t.loading.playlists?s("spinner",{staticClass:"mt2"}):s("div",{staticClass:"flexrow"},t._l(t.lastPlaylistsUpdated,(function(i){return s("router-link",{key:"recent-modified-playlist-"+i.id,staticClass:"recent-playlist flexrow-item",attrs:{to:t.getPlaylistPath(i.id)}},[s("div",{staticClass:"has-text-centered"},[s("light-entity-thumbnail",{attrs:{"preview-file-id":i.first_preview_file_id,type:"previews",width:"auto",height:"auto","max-width":"300px","max-height":"150px","empty-height":"150px"}})],1),s("h3",[t._v(t._s(i.name))]),s("span",[t._v(" "+t._s(t.$t("playlists.updated_at"))+" "+t._s(t.formatDate(i.updated_at))+" ")])])})),1)],1):0===t.playlists.length?s("div",{staticClass:"playlist-column no-selection has-text-centered"},[t.loading.playlists||t.loading.playlistsInit?s("spinner",{staticClass:"mt2"}):s("div",[s("p",{staticClass:"empty-explaination"},[t._v(" "+t._s(t.$t("playlists.no_playlist"))+" ")]),t.isCurrentUserManager?s("button",{key:"new-playlist-button",class:{big:!0,button:!0,"is-loading":t.loading.addPlaylist},on:{click:t.showAddModal}},[t._v(" "+t._s(t.$t("playlists.new_playlist"))+" ")]):t._e()])],1):s("div",{staticClass:"playlist-column column"},[s("playlist-player",{ref:"playlist-player",attrs:{playlist:t.currentPlaylist,entities:t.currentEntities,"is-loading":t.loading.playlist,"is-adding-entity":t.isAddingEntity,"is-asset-playlist":t.isAssetPlaylist},on:{"edit-clicked":t.showEditModal,"show-add-entities":t.toggleAddEntities,"preview-changed":t.onPreviewChanged,"task-type-changed":t.onTaskTypeChanged,"playlist-deleted":function(i){return t.$router.push(t.playlistsPath)},"remove-entity":t.removeEntity,"order-change":t.onOrderChange,"annotation-changed":t.onAnnotationChanged,"for-client-changed":t.onForClientChanged,"annotations-refreshed":t.onAnnotationsRefreshed}}),t.isCurrentUserManager&&t.isAddingEntity&&!t.loading.playlist?s("div",[s("div",{staticClass:"addition-header"},[s("div",{staticClass:"flexrow"},[s("page-subtitle",{staticClass:"flexrow-item",attrs:{text:t.addEntitiesText}}),s("span",{staticClass:"filler"}),s("a",{staticClass:"close-button",on:{click:t.toggleAddEntities}},[s("x-icon")],1)],1),s("div",{staticClass:"flexrow"},[s("search-field",{ref:"search-field",staticClass:"flexrow-item",attrs:{"can-save":!1,placeholder:t.isAssetPlaylist?"chars mode=wfa":"ex: seq01 anim=wfa"},on:{change:t.onSearchChange}}),s("button-simple",{staticClass:"flexrow-item",attrs:{title:t.$t("entities.build_filter.title"),icon:"funnel"},on:{click:function(i){t.modals.isBuildFilterDisplayed=!0}}}),t.isAddSearchVisible?s("button",{class:{button:!0,"flexrow-item":!0,"add-sequence":!0},attrs:{disabled:t.isAdditionLoading},on:{click:t.addCurrentSelection}},[t._v(" "+t._s(t.$t("playlists.add_selection"))+" ")]):t._e(),s("span",{staticClass:"filler"}),t.isAssetPlaylist?t._e():s("button",{class:{button:!0,"add-sequence":!0,"is-loading":this.loading.addDaily},attrs:{disabled:t.isAdditionLoading},on:{click:t.addDailyPending}},[t._v(" "+t._s(t.$t("playlists.build_daily"))+" ")]),t.isTVShow&&!t.isAssetPlaylist?s("button",{class:{button:!0,"add-sequence":!0,"is-loading":this.loading.addEpisode},attrs:{disabled:t.isAdditionLoading},on:{click:t.addEpisodePending}},[t._v(" "+t._s(t.$t("playlists.add_episode"))+" ")]):t.isAssetPlaylist?t._e():s("button",{class:{button:!0,"add-sequence":!0,"is-loading":this.loading.addMovie},attrs:{disabled:t.isAdditionLoading},on:{click:t.addMovie}},[t._v(" "+t._s(t.$t("playlists.add_movie"))+" ")])],1)])]):t._e(),t.isCurrentUserManager&&t.isAddingEntity?s("div",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onBodyScroll,expression:"onBodyScroll"}],staticClass:"addition-section"},[t.isShotsLoading||t.isAssetsLoading?s("spinner",{key:"entity-loader",staticClass:"mt2"}):s("div",{ref:"entityListContent"},[t.isAssetPlaylist?s("div",t._l(t.displayedAssetsByType,(function(i,e){return s("div",{key:"asset-type-"+e},[i.length>0?s("h2",{staticClass:"entity-group-title"},[t._v(" "+t._s(i[0].asset_type_name)+" ")]):t._e(),s("div",{staticClass:"addition-entities"},t._l(i.filter((function(t){return!t.canceled})),(function(i){return s("div",{key:i.id,class:{"addition-shot":!0},on:{click:function(s){return s.preventDefault(),t.addEntityToPlaylist(i)}}},[s("light-entity-thumbnail",{attrs:{"preview-file-id":i.preview_file_id,width:"150px",height:"100px"}}),s("span",{staticClass:"playlisted-shot-name"},[t._v(t._s(i.name))])],1)})),0)])})),0):s("div",t._l(t.displayedShotsBySequence,(function(i,e){return s("div",{key:"sequence-"+e},[i.length>0?s("h2",{staticClass:"entity-group-title"},[t._v(" "+t._s(i[0].sequence_name)+" "),t.isCurrentUserManager?s("button",{key:"add-sequence-button-"+i[0].sequence_id,staticClass:"button",on:{click:function(s){return t.addSequence(i)}}},[t._v(" "+t._s(t.$t("playlists.add_sequence"))+" ")]):t._e()]):t._e(),s("div",{staticClass:"addition-entities"},t._l(i.filter((function(t){return!t.canceled})),(function(i){return s("div",{key:i.id,class:{"addition-shot":!0,playlisted:void 0!==t.currentEntities[i.id]},on:{click:function(s){return s.preventDefault(),t.addEntityToPlaylist(i)}}},[s("light-entity-thumbnail",{attrs:{"preview-file-id":i.preview_file_id,width:"150px",height:"100px"}}),s("div",[t.currentPlaylist.task_type_id?s("span",{style:{color:t.getTaskStatus(i).color},attrs:{title:t.getTaskStatus(i).name}},[t._v(" • ")]):t._e(),s("span",{staticClass:"playlisted-shot-name"},[t._v(t._s(i.name))])])],1)})),0)])})),0)])],1):t._e()],1)]),s("edit-playlist-modal",{ref:"edit-playlist-modal",attrs:{active:t.modals.isEditDisplayed,"is-loading":t.loading.editPlaylist,"is-error":t.errors.editPlaylist,"playlist-to-edit":t.playlistToEdit,"task-type-id":t.taskTypeId},on:{cancel:t.hideEditModal,confirm:t.confirmEditPlaylist}}),s("build-filter-modal",{ref:"build-filter-modal",attrs:{active:t.modals.isBuildFilterDisplayed,"entity-type":t.isAssetPlaylist?"asset":"shot"},on:{confirm:t.confirmBuildFilter,cancel:function(i){t.modals.isBuildFilterDisplayed=!1}}})],1)},a=[],l=s("2909"),n=s("5530"),o=(s("d81d"),s("4ec9"),s("d3b7"),s("3ca3"),s("ddb0"),s("fb6a"),s("4e82"),s("99af"),s("b0c0"),s("159b"),s("07ac"),s("4de4"),s("a630"),s("caad"),s("b64b"),s("ceca")),r=s.n(o),d=s("7f45"),c=s.n(d),h=s("2f62"),u=s("0a35"),y=s("9a9b"),p=s("3657"),f=s("9d8b"),_=s("66e7"),g=s("2229"),v=s("de40"),P=s("c31e"),m=s("992f"),b=s("e4fd"),w=s("d49e"),E=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("p",{class:{error:!0,"has-text-right":t.alignRight,"is-hidden":t.hidden}},[t._v(" "+t._s(t.text)+" ")])},S=[],k={name:"error-text",props:{text:{default:"",type:String},hidden:{default:!1,type:Boolean},alignRight:{default:!1,type:Boolean}}},T=k,C=s("0c7c"),x=Object(C["a"])(T,E,S,!1,null,null,null),A=x.exports,M=s("d793"),$=s("8751"),D=s("1ea9"),L=s("4d04"),j=s("be83"),F={name:"productions",components:{BuildFilterModal:P["a"],ButtonSimple:v["a"],Combobox:m["a"],ComboboxTaskType:b["a"],ErrorText:A,EditPlaylistModal:w["a"],LightEntityThumbnail:M["a"],PageSubtitle:$["a"],PlaylistPlayer:D["a"],PlusIcon:u["L"],SearchField:L["a"],Spinner:j["a"],XIcon:u["db"]},data:function(){return{currentPlaylist:{name:""},currentSort:"updated_at",currentEntities:{},isAddingEntity:!1,isListToggled:!1,page:1,taskTypeId:"",sortedPlaylists:[],sortOptions:["updated_at","created_at","name"].map((function(t){return{label:t,value:t}})),playlistToEdit:{name:"".concat(c()().format("YYYY-MM-DD HH:mm:ss")),for_client:!1},previewFileMap:new Map,previewFileEntityMap:new Map,modals:{isBuildFilterDisplayed:!1,isDeleteDisplayed:!1,isEditDisplayed:!1},loading:{addPlaylist:!1,addDaily:!1,addEpisode:!1,addMovie:!1,addSequence:!1,addWeekly:!1,deletePlaylist:!1,editPlaylist:!1,playlist:!1,playlists:!1,playlistsInit:!0},errors:{addPlaylist:!1,editPlaylist:!1,deletePlaylist:!1,playlistLoading:!1}}},computed:Object(n["a"])(Object(n["a"])({},Object(h["c"])(["assetMap","assetSearchText","currentEpisode","currentProduction","displayedAssets","displayedAssetsByType","displayedShots","displayedShotsBySequence","isAssetsLoading","isCurrentUserManager","isShotsLoading","isTVShow","productionTaskTypes","playlistMap","playlists","playlistsPath","shotsByEpisode","shotSearchText","shotMap","taskMap","taskStatusMap","taskTypeMap"])),{},{isAdditionLoading:function(){return this.loading.addSequence||this.loading.addWeekly||this.loading.addDaily||this.loading.addEpisode},isAssetPlaylist:function(){return"asset"===this.currentPlaylist.for_entity},isAddSearchVisible:function(){return this.isAssetPlaylist&&this.assetSearchText||!this.isAssetPlaylist&&this.shotSearchText},lastPlaylistsUpdated:function(){return this.playlists.concat().sort(r()("updated_at")).reverse().slice(0,3)},lastPlaylistsCreated:function(){return this.playlists.slice(0,3)},playlistPlayer:function(){return this.$refs["playlist-player"]},addEntitiesText:function(){return this.isAssetPlaylist?this.$t("playlists.add_assets"):this.$t("playlists.add_shots")},tvShowPageTitle:function(){var t=this.currentProduction?this.currentProduction.name:"",i="";return this.currentEpisode&&(i=this.currentEpisode.name,"all"===this.currentEpisode.id&&(i=this.$t("main.all")),"main"===this.currentEpisode.id&&(i="Main Pack")),"".concat(t," - ").concat(i)+" | ".concat(this.$t("playlists.title")," - Kitsu")},shortPageTitle:function(){var t=this.currentProduction?this.currentProduction.name:"";return"".concat(t," ").concat(this.$t("playlists.title")," - Kitsu")},taskTypeList:function(){return[{id:"",color:"#999",name:this.$t("news.all")}].concat(Object(l["a"])(this.productionTaskTypes))}}),methods:Object(n["a"])(Object(n["a"])({},Object(h["b"])(["addNewBuildJob","pushEntityToPlaylist","changePlaylistOrder","changePlaylistPreview","changePlaylistType","displayMoreAssets","displayMoreShots","editPlaylist","getPending","loadMorePlaylists","loadPlaylist","loadPlaylists","loadEntityPreviewFiles","loadShots","loadAssets","markBuildJobAsDone","newPlaylist","refreshPlaylist","removeEntityPreviewFromPlaylist","removeBuildJobFromList","setAssetSearch","setCurrentEpisode","setShotSearch","updatePreviewAnnotation"])),{},{formatDate:function(t){return Object(p["c"])(t)},getPlaylistPath:function(t,i){return Object(f["b"])(this.currentProduction.id,this.currentEpisode?this.currentEpisode.id:null,t,i)},playlistElementStyle:function(t){var i=this.taskTypeMap.get(t.task_type_id),s=i?i.color:"transparent";return{"border-left":"2px solid "+s}},getTaskStatus:function(t){if(t=this.shotMap.get(t.id),t||(t=this.assetMap.get(t.id)),!t)return{};var i=t.validations.get(this.currentPlaylist.task_type_id);if(i){var s=this.taskMap.get(i);if(!s)return{};var e=this.taskStatusMap.get(s.task_status_id);return e}return{}},loadShotsData:function(t){0===this.displayedShots.length||this.displayedShots[0].project_id!==this.currentProduction.id||this.currentEpisode&&this.displayedShots[0].episode_id!==this.currentEpisode.id?this.isTVShow&&this.currentEpisode&&("main"===this.currentEpisode.id||"all"===this.currentEpisode.id)?t():this.loadShots(t):t()},loadAssetsData:function(){return this.isTVShow||0===this.displayedAssets.length?this.loadAssets():Promise.resolve()},loadPlaylistsData:function(){var t=this,i=arguments.length>0&&void 0!==arguments[0]&&arguments[0],s=function(){t.setCurrentPlaylist((function(){return t.currentPlaylist&&t.currentPlaylist.id||t.goFirstPlaylist(),Promise.resolve()}))};return 0===this.playlists.length||i?this.loadPlaylists({sortBy:this.currentSort,page:this.page,taskTypeId:this.taskTypeId}).then((function(){return s()})).catch((function(i){return console.error(i),t.errors.loadPlaylists=!0,Promise.reject(i)})):s()},onPlaylistListScroll:function(t,i){var s=this;if(!this.$options.silentMore){var e=this.$refs.playlistList,a=e.scrollHeight-e.offsetHeight;a<i.scrollTop+20&&(this.$options.silentMore=!0,this.page++,this.loadMorePlaylists({sortBy:this.currentSort,page:this.page,taskTypeId:this.taskTypeId}).then((function(t){setTimeout((function(){s.$options.silentMore=!1}),1e3)})).catch((function(t){return console.error(t),s.$options.silentMore=!1,s.errors.loadPlaylists=!0,Promise.reject(t)})))}},rebuildCurrentEntities:function(){var t=this;this.currentEntities={};var i={};this.previewFileMap=new Map,this.previewFileEntityMap=new Map,this.currentPlaylist&&this.currentPlaylist.shots&&this.currentPlaylist.shots.forEach((function(s){var e=t.convertEntityToPlaylistFormat(s);if(e){i[e.id]=e,t.previewFileEntityMap.set(s.preview_file_id,e);var a=Object.values(e.preview_files);a.forEach((function(i){i.forEach((function(i){t.previewFileMap.set(i.id,i)}))}))}})),this.$nextTick((function(){t.currentEntities=i}))},onAnnotationsRefreshed:function(t){var i=this.previewFileEntityMap.get(t.id),s=this.previewFileMap.get(t.id);i&&(i.preview_file_annotations=t.annotations),s&&(s.annotations=t.annotations)},convertEntityToPlaylistFormat:function(t){var i,s=this;if(i=this.isAssetPlaylist?this.assetMap.get(t.id):this.shotMap.get(t.id),i){var e={id:t.id,name:i.name,parent_name:i.sequence_name||i.asset_type_name,preview_files:t.preview_files,preview_file_id:t.preview_file_id||i.preview_file_id,preview_file_extension:t.preview_file_extension||i.preview_file_extension,preview_file_task_id:t.task_id||t.preview_file_task_id||i.preview_file_task_id,preview_file_annotations:t.preview_file_annotations||i.preview_file_annotations,preview_file_previews:t.preview_file_previews||i.preview_file_previews,preview_nb_frames:t.nb_frames||i.nb_frames||y["a"]};this.previewFileEntityMap.set(e.preview_file_id,e);var a=e.preview_file_previews||[];return a.forEach((function(t){s.previewFileMap.set(t.id,t)})),e}return null},setCurrentPlaylist:function(t){var i=this,s=this.$route.params.playlist_id,e=this.playlistMap.get(s);e?(this.loading.playlist=!0,this.loadPlaylist({playlist:e,callback:function(s,e){s&&console.error(s),i.currentPlaylist=e,i.rebuildCurrentEntities(),i.loading.playlist=!1,t&&t()}})):(this.currentPlaylist={name:""},this.currentShots={})},addEntity:function(t){var i=this;return this.loadEntityPreviewFiles(t).then((function(s){return i.addToStorePlaylistAndSave(s,t)})).then(this.addToPlayerPlaylist).catch((function(t){return console.error(t)}))},addToStorePlaylistAndSave:function(t,i){return this.pushEntityToPlaylist({playlist:this.currentPlaylist,previewFiles:t,entity:Object(n["a"])({},i)})},addToPlayerPlaylist:function(t){var i=this,s=this.convertEntityToPlaylistFormat(t);this.currentEntities[s.id]=s,this.playlistPlayer.entityList.push(s),this.$nextTick((function(){i.playlistPlayer.scrollToRight()}))},addEntityToPlaylist:function(t){this.currentEntities[t.id]||this.addEntity(t).then(this.playlistPlayer.scrollToRight())},removeEntity:function(t){var i=this;this.removeEntityPreviewFromPlaylist({playlist:this.currentPlaylist,entity:t,callback:function(){delete i.currentEntities[t.id]}})},clearCurrentPlaylist:function(){this.currentPlaylist={},this.currentShots={}},resetPlaylist:function(){this.clearCurrentPlaylist(),this.setCurrentPlaylist()},addCurrentSelection:function(){var t=this;this.$options.silent=!0;var i=this.isAssetPlaylist?this.displayedAssets:this.displayedShots;this.addEntities(Object(l["a"])(i).reverse(),(function(){t.$options.silent=!1}))},addSequence:function(t){var i=this;if(t.length>0){var s=t[0].sequence_id,e=Array.from(this.shotMap.values()).filter((function(t){return t.sequence_id===s})).sort(r()("name")).reverse();this.$options.silent=!0,this.addEntities(e,(function(){i.$options.silent=!1}))}},addAllPending:function(){var t=this;this.$options.silent=!0,this.loading.addWeekly=!0,this.getPending(!1).then((function(i){t.addEntities(i.reverse(),(function(){t.loading.addWeekly=!1,t.$options.silent=!1}))}))},addDailyPending:function(){var t=this;this.loading.addDaily=!0,this.$options.silent=!0,this.getPending(!0).then((function(i){t.addEntities(Object(g["l"])(i).reverse(),(function(){t.loading.addDaily=!1,t.$options.silent=!1}))}))},addEpisodePending:function(){var t,i=this;this.loading.addEpisode=!0,this.$options.silent=!0;var s=(t=[]).concat.apply(t,Object(l["a"])(this.shotsByEpisode));s=Object(g["l"])(s).reverse(),this.addEntities(s,(function(){i.loading.addEpisode=!1,i.$options.silent=!1}))},addMovie:function(){var t=this;this.loading.addMovie=!0,this.$options.silent=!0;var i=Object(g["l"])(Array.from(this.shotMap.values()));this.addEntities(i.reverse(),(function(){t.loading.addMovie=!1,t.$options.silent=!1}))},addEntities:function(t,i){var s=this;if(t&&t.length>0){var e=t.pop();this.addEntity(e).then((function(){s.addEntities(t,i)}))}else i()},onPreviewChanged:function(t,i){this.changePlaylistPreview({playlist:this.currentPlaylist,entity:t,previewFileId:i})},onOrderChange:function(t){this.changePlaylistOrder({playlist:this.currentPlaylist,info:t})},onAnnotationChanged:function(t){var i=t.preview,s=t.additions,e=t.deletions,a=t.updates,l=i.task_id;this.updatePreviewAnnotation({taskId:l,preview:i,additions:s,deletions:e,updates:a})},confirmBuildFilter:function(t){this.modals.isBuildFilterDisplayed=!1,this.$refs["search-field"].setValue(t),this.onSearchChange(t)},onSearchChange:function(t){t.length>1?this.isAssetPlaylist?(this.setAssetSearch(t),this.displayMoreAssets()):(this.setShotSearch(t),this.displayMoreShots()):this.isAssetPlaylist?this.setAssetSearch(""):this.setShotSearch("")},onForClientChanged:function(t){this.editPlaylist({data:{id:this.currentPlaylist.id,for_client:t}})},runAddPlaylist:function(t){var i=this,s={name:t.name,production_id:this.currentProduction.id,for_client:t.for_client,for_entity:t.for_entity,is_for_all:t.is_for_all,task_type_id:t.task_type_id};this.isTVShow&&this.currentEpisode&&(s.episode_id=this.currentEpisode.id),this.loading.editPlaylist=!0,this.errors.editPlaylist=!1,this.newPlaylist(s).then((function(t){i.$router.push(i.getPlaylistPath(t.id)),i.loading.editPlaylist=!1,i.modals.isEditDisplayed=!1})).catch((function(t){console.error(t),i.errors.editPlaylist=!0,i.loading.editPlaylist=!1}))},confirmEditPlaylist:function(t){this.playlistToEdit.id?(t.id=this.currentPlaylist.id,this.runEditPlaylist(t)):this.runAddPlaylist(t)},runEditPlaylist:function(t){var i=this;this.loading.editPlaylist=!0,this.errors.editPlaylist=!1,this.editPlaylist({data:{id:t.id,for_client:t.for_client,for_entity:t.for_entity,name:t.name,task_type_id:t.task_type_id},callback:function(t,s){t&&(i.errors.editPlaylist=!0),i.loading.editPlaylist=!1,i.modals.isEditDisplayed=!1,Object.assign(i.currentPlaylist,s)}})},goFirstPlaylist:function(){this.playlists.length>0?this.$router.push({name:"playlist",params:{production_id:this.currentProduction.id,playlist_id:this.playlists[0].id}}):this.$router.push(this.playlistsPath)},toggleAddEntities:function(){this.isAddingEntity&&this.resetPlaylist(),this.isAddingEntity=!this.isAddingEntity},onTaskTypeChanged:function(t){var i=this;this.changePlaylistType({playlist:this.currentPlaylist,taskTypeId:t,callback:function(){i.rebuildCurrentEntities()}})},onBodyScroll:function(t,i){var s=this.$refs.entityListContent.scrollHeight-this.$refs.entityListContent.offsetHeight;s<i.scrollTop&&(this.isAssetPlaylist?this.displayMoreAssets():this.displayMoreShots())},resetSorting:function(){var t=1;["created_at","updated_at"].includes(this.currentSort)&&(t=-1),this.sortedPlaylists=Object(l["a"])(this.playlists).sort(r()(this.currentSort,t).thenBy("name"))},showAddModal:function(){this.playlistToEdit={name:"".concat(c()().format("YYYY-MM-DD HH:mm:ss")),for_client:!1},this.$refs["edit-playlist-modal"]=!0,this.modals.isEditDisplayed=!0},showEditModal:function(){this.playlistToEdit=this.currentPlaylist,this.modals.isEditDisplayed=!0},hideEditModal:function(){this.playlistToEdit={name:"".concat(c()().format("YYYY-MM-DD HH:mm:ss")),for_client:!1},this.modals.isEditDisplayed=!1},reloadAll:function(){var t=this;this.loading.playlists||(this.loading.playlists=!0,this.loadShotsData((function(){t.loadAssetsData().then((function(){return t.page=1,t.loadPlaylistsData()})).then((function(){t.loading.playlists=!1,t.resetPlaylist(),setTimeout((function(){t.loading.playlistsInit=!1}),300)}))})))}}),mounted:function(){var t=this;this.$nextTick((function(){t.reloadAll(),localStorage.getItem("playlist-sort")&&(t.currentSort=localStorage.getItem("playlist-sort")),t.resetSorting()}))},watch:{$route:function(){this.setCurrentPlaylist()},currentPlaylist:function(){this.currentPlaylist.shots?(this.$options.silentMore=!1,this.isAddingEntity=0===Object.keys(this.currentPlaylist.shots).length):this.isAddingEntity=!0},currentProduction:function(){this.$store.commit("LOAD_PLAYLISTS_END",[]),this.reloadAll()},currentEpisode:function(){this.$store.commit("LOAD_PLAYLISTS_END",[]),this.currentEpisode&&this.reloadAll()},playlists:function(){},currentSort:function(){var t=this;localStorage.setItem("playlist-sort",this.currentSort),this.loading.playlists=!0,this.page=1,this.loadPlaylistsData(!0).then((function(){t.loading.playlists=!1}))},isListToggled:function(){this.playlistPlayer.onWindowResize()}},socket:{events:{"playlist:new":function(t){this.playlistMap.get(t.playlist_id)||this.refreshPlaylist(t.playlist_id)},"playlist:update":function(t){},"playlist:delete":function(t){this.$store.commit("DELETE_PLAYLIST_END",{id:t.playlist_id})},"build-job:new":function(t){t.playlist_id===this.currentPlaylist.id&&(this.currentPlaylist.build_jobs=[{id:t.build_job_id,created_at:t.created_at,status:"running",playlist_id:this.currentPlaylist.id}].concat(this.currentPlaylist.build_jobs))},"build-job:update":function(t){t.playlist_id===this.currentPlaylist.id&&Object(_["i"])(this.currentPlaylist.build_jobs,{id:t.build_job_id,status:t.status})},"build-job:delete":function(t){t.playlist_id===this.currentPlaylist.id&&(this.currentPlaylist.build_jobs=Object(_["h"])(this.currentPlaylist.build_jobs,{id:t.build_job_id}))}}},metaInfo:function(){return this.isTVShow?{title:this.tvShowPageTitle}:{title:this.shortPageTitle}}},O=F,B=(s("dd3b"),Object(C["a"])(O,e,a,!1,null,"212e869f",null));i["default"]=B.exports},dd3b:function(t,i,s){"use strict";s("c52e")}}]);
//# sourceMappingURL=chunk-26f029b8.898f0258.js.map