import { useState } from 'react';
import { IoSettingsSharp } from "react-icons/io5";
import { useSoundContext } from '../../context/SoundContext';
import { useThemeContext } from '../../context/ThemeContext';

const SettingsMenu = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSounds, setShowSounds] = useState(false);
  const [showThemes, setShowThemes] = useState(false);
  const { changeSound } = useSoundContext();
  const { changeTheme } = useThemeContext();

  const sounds = ["iOS_App_Store", "iOS_Messages", "iOS_Notification", "WhatsApp1", "WhatsApp2", "Theme1", "Theme2"];
  const themes = ["yourname.jpg", "house.jpg", "city.jpg", "stars1.jpg", "sunset.jpg", "mountains.jpg", "river.jpg", "chess.png", "snowfall.jpeg", "forest.jpg"]

  const handleSoundChange = (sound) => {
    changeSound(sound);
    setShowSounds(!showSounds);
    setShowDropdown(!showDropdown);
  };

  const handleThemeChange = (theme) => {
    changeTheme(theme);
    setShowThemes(!showThemes);
    setShowDropdown(!showDropdown);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
    if (showDropdown) {
      setShowSounds(false);
      setShowThemes(false);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-center w-10 h-10 text-white rounded-full"
      >
        <IoSettingsSharp className="w-6 h-6" />
      </button>
      {showDropdown && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg shadow-xl transition-transform transform scale-95 hover:scale-100">
          <div
            onClick={() => setShowSounds(!showSounds)}
            className="px-4 py-2 cursor-pointer bg-red-500 font-style: italic hover:bg-red-600 transition duration-200 rounded-lg"
          >
            Change Notification
          </div>
          {showSounds && (
            <div className="mt-2 bg-white border-t border-gray-300 rounded-b-lg shadow-lg">
              {sounds.map((sound) => (
                <div
                  key={sound}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-800/50"
                  onClick={() => handleSoundChange(sound)}
                >
                  {sound}
                </div>
              ))}
            </div>
          )}
          <div
            onClick={() => setShowThemes(!showThemes)}
            className="px-4 py-2 rounded-lg cursor-pointer bg-blue-700 font-style: italic hover:bg-blue-800 transition duration-200"
          >
            Change Theme
          </div>
          {showThemes && (
            <div className='flex-grow overflow-y-auto max-h-64'>
              <div className="mt-2 bg-white border-t- bg-black-600 border-gray-300 rounded-b-lg shadow-lg">
                {themes.map((theme) => (
                  <div
                    key={theme}
                    className="rounded-lg border border-gray-300 px-4 py-2 cursor-pointer hover:bg-gray-100 transition duration-200"
                    onClick={() => handleThemeChange(theme)}
                  >
                    <img src={theme} alt="theme" className="w-40 h-16 object-cover" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SettingsMenu;
