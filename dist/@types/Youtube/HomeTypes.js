"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyleType = exports.TabIdentifier = exports.FluffyDisplayStyle = exports.FluffyContentPosition = exports.FluffyButtonSize = exports.AspectRatio = exports.PurpleDisplayStyle = exports.PurpleContentPosition = exports.RippleTarget = exports.PurpleButtonSize = exports.Status = exports.QueueInsertPosition = exports.SharePanelType = exports.StyleEnum = exports.ItemHeight = exports.MusicVideoType = exports.Params = exports.PageType = exports.DisplayPriority = exports.IconType = exports.ThumbnailScale = exports.ThumbnailCrop = void 0;
var ThumbnailCrop;
(function (ThumbnailCrop) {
    ThumbnailCrop["MusicThumbnailCropUnspecified"] = "MUSIC_THUMBNAIL_CROP_UNSPECIFIED";
})(ThumbnailCrop || (exports.ThumbnailCrop = ThumbnailCrop = {}));
var ThumbnailScale;
(function (ThumbnailScale) {
    ThumbnailScale["MusicThumbnailScaleAspectFill"] = "MUSIC_THUMBNAIL_SCALE_ASPECT_FILL";
    ThumbnailScale["MusicThumbnailScaleAspectFit"] = "MUSIC_THUMBNAIL_SCALE_ASPECT_FIT";
    ThumbnailScale["MusicThumbnailScaleUnspecified"] = "MUSIC_THUMBNAIL_SCALE_UNSPECIFIED";
})(ThumbnailScale || (exports.ThumbnailScale = ThumbnailScale = {}));
var IconType;
(function (IconType) {
    IconType["AddToPlaylist"] = "ADD_TO_PLAYLIST";
    IconType["AddToRemoteQueue"] = "ADD_TO_REMOTE_QUEUE";
    IconType["Album"] = "ALBUM";
    IconType["Artist"] = "ARTIST";
    IconType["LibraryAdd"] = "LIBRARY_ADD";
    IconType["LibrarySaved"] = "LIBRARY_SAVED";
    IconType["Mix"] = "MIX";
    IconType["MusicExplicitBadge"] = "MUSIC_EXPLICIT_BADGE";
    IconType["MusicShuffle"] = "MUSIC_SHUFFLE";
    IconType["Pause"] = "PAUSE";
    IconType["PlayArrow"] = "PLAY_ARROW";
    IconType["QueuePlayNext"] = "QUEUE_PLAY_NEXT";
    IconType["Share"] = "SHARE";
    IconType["TabHome"] = "TAB_HOME";
    IconType["VolumeUp"] = "VOLUME_UP";
})(IconType || (exports.IconType = IconType = {}));
var DisplayPriority;
(function (DisplayPriority) {
    DisplayPriority["MusicResponsiveListItemColumnDisplayPriorityHigh"] = "MUSIC_RESPONSIVE_LIST_ITEM_COLUMN_DISPLAY_PRIORITY_HIGH";
    DisplayPriority["MusicResponsiveListItemColumnDisplayPriorityMedium"] = "MUSIC_RESPONSIVE_LIST_ITEM_COLUMN_DISPLAY_PRIORITY_MEDIUM";
})(DisplayPriority || (exports.DisplayPriority = DisplayPriority = {}));
var PageType;
(function (PageType) {
    PageType["MusicPageTypeAlbum"] = "MUSIC_PAGE_TYPE_ALBUM";
    PageType["MusicPageTypeArtist"] = "MUSIC_PAGE_TYPE_ARTIST";
    PageType["MusicPageTypePlaylist"] = "MUSIC_PAGE_TYPE_PLAYLIST";
})(PageType || (exports.PageType = PageType = {}));
var Params;
(function (Params) {
    Params["WAEB"] = "wAEB";
})(Params || (exports.Params = Params = {}));
var MusicVideoType;
(function (MusicVideoType) {
    MusicVideoType["MusicVideoTypeAtv"] = "MUSIC_VIDEO_TYPE_ATV";
})(MusicVideoType || (exports.MusicVideoType = MusicVideoType = {}));
var ItemHeight;
(function (ItemHeight) {
    ItemHeight["MusicResponsiveListItemHeightMediumCompact"] = "MUSIC_RESPONSIVE_LIST_ITEM_HEIGHT_MEDIUM_COMPACT";
})(ItemHeight || (exports.ItemHeight = ItemHeight = {}));
var StyleEnum;
(function (StyleEnum) {
    StyleEnum["StyleBlueText"] = "STYLE_BLUE_TEXT";
})(StyleEnum || (exports.StyleEnum = StyleEnum = {}));
var SharePanelType;
(function (SharePanelType) {
    SharePanelType["SharePanelTypeUnifiedSharePanel"] = "SHARE_PANEL_TYPE_UNIFIED_SHARE_PANEL";
})(SharePanelType || (exports.SharePanelType = SharePanelType = {}));
var QueueInsertPosition;
(function (QueueInsertPosition) {
    QueueInsertPosition["InsertAfterCurrentVideo"] = "INSERT_AFTER_CURRENT_VIDEO";
    QueueInsertPosition["InsertAtEnd"] = "INSERT_AT_END";
})(QueueInsertPosition || (exports.QueueInsertPosition = QueueInsertPosition = {}));
var Status;
(function (Status) {
    Status["Indifferent"] = "INDIFFERENT";
})(Status || (exports.Status = Status = {}));
var PurpleButtonSize;
(function (PurpleButtonSize) {
    PurpleButtonSize["MusicPlayButtonSizeSmall"] = "MUSIC_PLAY_BUTTON_SIZE_SMALL";
})(PurpleButtonSize || (exports.PurpleButtonSize = PurpleButtonSize = {}));
var RippleTarget;
(function (RippleTarget) {
    RippleTarget["MusicPlayButtonRippleTargetSelf"] = "MUSIC_PLAY_BUTTON_RIPPLE_TARGET_SELF";
})(RippleTarget || (exports.RippleTarget = RippleTarget = {}));
var PurpleContentPosition;
(function (PurpleContentPosition) {
    PurpleContentPosition["MusicItemThumbnailOverlayContentPositionCentered"] = "MUSIC_ITEM_THUMBNAIL_OVERLAY_CONTENT_POSITION_CENTERED";
})(PurpleContentPosition || (exports.PurpleContentPosition = PurpleContentPosition = {}));
var PurpleDisplayStyle;
(function (PurpleDisplayStyle) {
    PurpleDisplayStyle["MusicItemThumbnailOverlayDisplayStylePersistent"] = "MUSIC_ITEM_THUMBNAIL_OVERLAY_DISPLAY_STYLE_PERSISTENT";
})(PurpleDisplayStyle || (exports.PurpleDisplayStyle = PurpleDisplayStyle = {}));
var AspectRatio;
(function (AspectRatio) {
    AspectRatio["MusicTwoRowItemThumbnailAspectRatioSquare"] = "MUSIC_TWO_ROW_ITEM_THUMBNAIL_ASPECT_RATIO_SQUARE";
})(AspectRatio || (exports.AspectRatio = AspectRatio = {}));
var FluffyButtonSize;
(function (FluffyButtonSize) {
    FluffyButtonSize["MusicPlayButtonSizeMedium"] = "MUSIC_PLAY_BUTTON_SIZE_MEDIUM";
})(FluffyButtonSize || (exports.FluffyButtonSize = FluffyButtonSize = {}));
var FluffyContentPosition;
(function (FluffyContentPosition) {
    FluffyContentPosition["MusicItemThumbnailOverlayContentPositionBottomRight"] = "MUSIC_ITEM_THUMBNAIL_OVERLAY_CONTENT_POSITION_BOTTOM_RIGHT";
})(FluffyContentPosition || (exports.FluffyContentPosition = FluffyContentPosition = {}));
var FluffyDisplayStyle;
(function (FluffyDisplayStyle) {
    FluffyDisplayStyle["MusicItemThumbnailOverlayDisplayStyleHover"] = "MUSIC_ITEM_THUMBNAIL_OVERLAY_DISPLAY_STYLE_HOVER";
})(FluffyDisplayStyle || (exports.FluffyDisplayStyle = FluffyDisplayStyle = {}));
var TabIdentifier;
(function (TabIdentifier) {
    TabIdentifier["FEmusicHome"] = "FEmusic_home";
})(TabIdentifier || (exports.TabIdentifier = TabIdentifier = {}));
var StyleType;
(function (StyleType) {
    StyleType["StyleLargeTranslucentAndSelectedWhite"] = "STYLE_LARGE_TRANSLUCENT_AND_SELECTED_WHITE";
})(StyleType || (exports.StyleType = StyleType = {}));
