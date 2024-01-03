"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThumbnailScale = exports.ThumbnailCrop = exports.DisplayStyle = exports.ContentPosition = exports.RippleTarget = exports.ButtonSize = exports.QueueInsertPosition = exports.Params = exports.SharePanelType = exports.StyleEnum = exports.IconType = exports.ItemHeight = exports.MusicVideoType = exports.PageType = exports.DisplayPriority = void 0;
var DisplayPriority;
(function (DisplayPriority) {
    DisplayPriority["MusicResponsiveListItemColumnDisplayPriorityHigh"] = "MUSIC_RESPONSIVE_LIST_ITEM_COLUMN_DISPLAY_PRIORITY_HIGH";
})(DisplayPriority || (exports.DisplayPriority = DisplayPriority = {}));
var PageType;
(function (PageType) {
    PageType["MusicPageTypeArtist"] = "MUSIC_PAGE_TYPE_ARTIST";
    PageType["MusicPageTypeUserChannel"] = "MUSIC_PAGE_TYPE_USER_CHANNEL";
})(PageType || (exports.PageType = PageType = {}));
var MusicVideoType;
(function (MusicVideoType) {
    MusicVideoType["MusicVideoTypeOmv"] = "MUSIC_VIDEO_TYPE_OMV";
    MusicVideoType["MusicVideoTypeUgc"] = "MUSIC_VIDEO_TYPE_UGC";
})(MusicVideoType || (exports.MusicVideoType = MusicVideoType = {}));
var ItemHeight;
(function (ItemHeight) {
    ItemHeight["MusicResponsiveListItemHeightTall"] = "MUSIC_RESPONSIVE_LIST_ITEM_HEIGHT_TALL";
})(ItemHeight || (exports.ItemHeight = ItemHeight = {}));
var IconType;
(function (IconType) {
    IconType["AddToPlaylist"] = "ADD_TO_PLAYLIST";
    IconType["AddToRemoteQueue"] = "ADD_TO_REMOTE_QUEUE";
    IconType["Artist"] = "ARTIST";
    IconType["Close"] = "CLOSE";
    IconType["Favorite"] = "FAVORITE";
    IconType["Mix"] = "MIX";
    IconType["Pause"] = "PAUSE";
    IconType["PlayArrow"] = "PLAY_ARROW";
    IconType["QueuePlayNext"] = "QUEUE_PLAY_NEXT";
    IconType["Share"] = "SHARE";
    IconType["Unfavorite"] = "UNFAVORITE";
    IconType["VolumeUp"] = "VOLUME_UP";
})(IconType || (exports.IconType = IconType = {}));
var StyleEnum;
(function (StyleEnum) {
    StyleEnum["StyleBlueText"] = "STYLE_BLUE_TEXT";
})(StyleEnum || (exports.StyleEnum = StyleEnum = {}));
var SharePanelType;
(function (SharePanelType) {
    SharePanelType["SharePanelTypeUnifiedSharePanel"] = "SHARE_PANEL_TYPE_UNIFIED_SHARE_PANEL";
})(SharePanelType || (exports.SharePanelType = SharePanelType = {}));
var Params;
(function (Params) {
    Params["WAEB"] = "wAEB";
})(Params || (exports.Params = Params = {}));
var QueueInsertPosition;
(function (QueueInsertPosition) {
    QueueInsertPosition["InsertAfterCurrentVideo"] = "INSERT_AFTER_CURRENT_VIDEO";
    QueueInsertPosition["InsertAtEnd"] = "INSERT_AT_END";
})(QueueInsertPosition || (exports.QueueInsertPosition = QueueInsertPosition = {}));
var ButtonSize;
(function (ButtonSize) {
    ButtonSize["MusicPlayButtonSizeSmall"] = "MUSIC_PLAY_BUTTON_SIZE_SMALL";
})(ButtonSize || (exports.ButtonSize = ButtonSize = {}));
var RippleTarget;
(function (RippleTarget) {
    RippleTarget["MusicPlayButtonRippleTargetSelf"] = "MUSIC_PLAY_BUTTON_RIPPLE_TARGET_SELF";
})(RippleTarget || (exports.RippleTarget = RippleTarget = {}));
var ContentPosition;
(function (ContentPosition) {
    ContentPosition["MusicItemThumbnailOverlayContentPositionCentered"] = "MUSIC_ITEM_THUMBNAIL_OVERLAY_CONTENT_POSITION_CENTERED";
})(ContentPosition || (exports.ContentPosition = ContentPosition = {}));
var DisplayStyle;
(function (DisplayStyle) {
    DisplayStyle["MusicItemThumbnailOverlayDisplayStylePersistent"] = "MUSIC_ITEM_THUMBNAIL_OVERLAY_DISPLAY_STYLE_PERSISTENT";
})(DisplayStyle || (exports.DisplayStyle = DisplayStyle = {}));
var ThumbnailCrop;
(function (ThumbnailCrop) {
    ThumbnailCrop["MusicThumbnailCropUnspecified"] = "MUSIC_THUMBNAIL_CROP_UNSPECIFIED";
})(ThumbnailCrop || (exports.ThumbnailCrop = ThumbnailCrop = {}));
var ThumbnailScale;
(function (ThumbnailScale) {
    ThumbnailScale["MusicThumbnailScaleAspectFit"] = "MUSIC_THUMBNAIL_SCALE_ASPECT_FIT";
})(ThumbnailScale || (exports.ThumbnailScale = ThumbnailScale = {}));
