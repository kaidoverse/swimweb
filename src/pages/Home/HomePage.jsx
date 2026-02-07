import { useVideo } from '../../context/VideoContext';
import Hero from './sections/Hero';
import About from './sections/About';
import Takers from './sections/Takers';
import Program from './sections/Program';
// import Testimonials from './sections/Testimonials';
import Team from './sections/Team';
import VideoModal from '../../Components/VideoModal';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();
    const { isVideoOpen, closeVideo } = useVideo();

    return (
        <>
            <Hero onNavigate={navigate} />
            <About />
            <Takers />
            <Program onSelect={navigate} />
            {/* <Testimonials /> */}
            <Team />

            <VideoModal
                open={isVideoOpen}
                onClose={closeVideo}
            />
        </>
    );
};

export default HomePage;
