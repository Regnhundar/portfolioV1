import "./projectOverlay.css";
interface Props {
    src: string;
    alt: string;
    isOverlayOpen: boolean;
    setIsOverlayOpen: (arg: boolean) => void;
}
const ProjectOverlay: React.FC<Props> = ({ src, alt, isOverlayOpen, setIsOverlayOpen }) => {
    return (
        <div className={`project-overlay ${isOverlayOpen ? "open" : ""}`} onClick={() => setIsOverlayOpen(!isOverlayOpen)}>
            <img className="project-overlay__image" src={src} alt={alt} />
        </div>
    );
};

export default ProjectOverlay;
