import React, { useCallback, useEffect, useRef, useState } from "react";
import { IoPause, IoVolumeHigh } from "react-icons/io5";
import trackUrl from "./music/1773832797889_ARIJIT SINGH_ Woh Din Lyrical _ Chhichhore _ Sushant_ Shraddha _ Pritam_ Amitabh(MP3_160K).mp3?url";
import "./MusicBar.css";

const TRACK = trackUrl;

function formatTime(sec) {
  if (!Number.isFinite(sec) || sec < 0) return "0:00";
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}
const MusicBar = () => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [t, setT] = useState(0);
  const [dur, setDur] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    const onTime = () => setT(el.currentTime);
    const onDur = () => setDur(el.duration || 0);
    const onPlay = () => {
      setPlaying(true);
      setError(null);
    };
    const onPause = () => setPlaying(false);
    const onEnded = () => setPlaying(false);
    const onLoadErr = () => {
      setError("Could not load the audio file. Check the file in src/music/.");
      setPlaying(false);
    };
    el.addEventListener("timeupdate", onTime);
    el.addEventListener("loadedmetadata", onDur);
    el.addEventListener("durationchange", onDur);
    el.addEventListener("play", onPlay);
    el.addEventListener("pause", onPause);
    el.addEventListener("ended", onEnded);
    el.addEventListener("error", onLoadErr);
    return () => {
      el.removeEventListener("timeupdate", onTime);
      el.removeEventListener("loadedmetadata", onDur);
      el.removeEventListener("durationchange", onDur);
      el.removeEventListener("play", onPlay);
      el.removeEventListener("pause", onPause);
      el.removeEventListener("ended", onEnded);
      el.removeEventListener("error", onLoadErr);
    };
  }, []);

  const toggle = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      const el = audioRef.current;
      if (!el) return;
      if (el.paused) {
        el.volume = 1;
        setError(null);
        const p = el.play();
        if (p !== undefined) {
          p.catch((err) => {
            setError(
              err?.message || "Could not start playback. Check the file path and your browser (try tapping again on mobile)."
            );
            setPlaying(false);
          });
        }
      } else {
        el.pause();
      }
    },
    []
  );

  const onSeek = useCallback(
    (e) => {
      const el = audioRef.current;
      if (!el || !dur) return;
      const pct = Number(e.target.value) / 100;
      el.currentTime = pct * dur;
    },
    [dur]
  );

  const pct = dur > 0 ? (t / dur) * 100 : 0;

  return (
    <>
      <audio ref={audioRef} src={TRACK} preload="auto" playsInline />
      {playing && (
        <div className="music-now" role="region" aria-label="Audio">
          <div className="music-now__inner">
            <div className="music-now__brand-block">
              <span className="music-now__kicker">music by</span>
              <a
                className="music-now__brand"
                href="https://beatify-2.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Beatify (opens in a new tab)"
              >
                Beatify
              </a>
            </div>
            <label className="music-now__seek-wrap">
              <span className="visually-hidden">Seek</span>
              <input
                className="music-now__seek"
                type="range"
                min={0}
                max={100}
                step={0.1}
                value={dur ? pct : 0}
                onChange={onSeek}
                onInput={onSeek}
                aria-label="Seek"
              />
            </label>
            <div className="music-now__time">
              {formatTime(t)} / {formatTime(dur)}
            </div>
            <button
              type="button"
              className="music-fab music-fab--inbar"
              onClick={toggle}
              onPointerDown={(e) => e.stopPropagation()}
              aria-label="Pause"
            >
              <IoPause className="music-fab__icon" aria-hidden />
            </button>
          </div>
        </div>
      )}
      {!playing && (
        <div className="music-fab-wrap">
          {error && (
            <p className="music-fab__error" role="alert">
              {error}
            </p>
          )}
          <button
            type="button"
            className="music-fab"
            onClick={toggle}
            onPointerDown={(e) => e.stopPropagation()}
            aria-label="Play music"
          >
            <IoVolumeHigh className="music-fab__icon" aria-hidden />
          </button>
        </div>
      )}
    </>
  );
};

export default MusicBar;
