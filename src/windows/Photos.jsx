import { WindowControls } from "#components";
import { gallery, photosLinks } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";
import { Mail, Search } from "lucide-react";

const Photos = () => {
  const { openWindow } = useWindowStore();

  return (
    <>
      <div id="window-header">
        <WindowControls target="photos" />

        <div className="w-full flex justify-end items-center gap-3 text-gray-500">
          <Mail className="icon" />
          <Search className="icon" />
        </div>
      </div>

      <div className="flex w-full">
        <div className="sidebar">
          <h2>Photos</h2>

          <ul>
            {photosLinks.map(({ id, icon, title }) => (
              <li key={id}>
                <img src={icon} alt={title} />
                <p>{title}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1 p-5 overflow-auto">
          <ul
            className="grid grid-cols-3 gap-3"
            style={{ gridAutoRows: "120px" }}
          >
            {gallery.map(({ id, img }, index) => {
              // Define span classes based on position
              const spanClasses =
                index === 0
                  ? "col-span-2 row-span-2"
                  : index === 1
                  ? "row-span-2"
                  : index === 2
                  ? "col-span-1"
                  : "col-span-2";

              return (
                <li
                  key={id}
                  className={`cursor-pointer overflow-hidden rounded-lg ${spanClasses}`}
                  onClick={() =>
                    openWindow("imgfile", {
                      id,
                      name: "Gallery Image",
                      icon: "/images/image.png",
                      kind: "file",
                      fileType: "img",
                      imageUrl: img,
                    })
                  }
                >
                  <img
                    src={img}
                    alt={`Gallery Image ${id}`}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

const PhotosWindow = WindowWrapper(Photos, "photos");

export default PhotosWindow;
