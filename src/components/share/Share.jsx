import React, { useState } from "react";
import "./share.css";
import { EmojiEmotions, Label, PermMedia, Room, Close } from "@material-ui/icons";

export default function Share({ onPost }) {
  const [text, setText] = useState("");
  const [imgPreview, setImgPreview] = useState(null);

  const handleImg = (e) => {
    const file = e.target.files[0];
    if (file) setImgPreview(URL.createObjectURL(file));
  };

  const handleSubmit = () => {
    if (!text.trim() && !imgPreview) return;
    if (onPost) onPost({ text, img: imgPreview });
    setText("");
    setImgPreview(null);
  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/person/1.jpg" alt="" />
          <input
            type="text"
            placeholder="What's on your mind, Patrick?"
            className="shareInput"
            value={text}
            onChange={e => setText(e.target.value)}
          />
        </div>

        {imgPreview && (
          <div className="shareImgPreview">
            <img src={imgPreview} alt="preview" className="sharePreviewImg" />
            <button className="shareRemoveImg" onClick={() => setImgPreview(null)}><Close fontSize="small" /></button>
          </div>
        )}

        <hr className="shareHr" />

        <div className="shareBottom">
          <div className="shareOptions">
            <label className="shareOption" htmlFor="shareImgInput">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Photo/Video</span>
              <input type="file" id="shareImgInput" accept="image/*" style={{ display: "none" }} onChange={handleImg} />
            </label>
            <div className="shareOption">
              <Label htmlColor="#1877f2" className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="#45bd62" className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="#f7b928" className="shareIcon" />
              <span className="shareOptionText">Feeling</span>
            </div>
          </div>
          <button className="shareButton" onClick={handleSubmit}>Post</button>
        </div>
      </div>
    </div>
  );
}
