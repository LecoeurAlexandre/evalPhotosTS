"use strict";
class ImageItem {
    constructor(imageUrl, imageTitle, imageDescription) {
        this.imageUrl = imageUrl;
        this.imageTitle = imageTitle;
        this.imageDescription = imageDescription;
        this._id = ++ImageItem._count;
    }
}
ImageItem._count = 0;
