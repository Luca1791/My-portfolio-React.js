import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particleConfig from "./package-confic";

function Particle() {
// const [init, setInit] = useState(false);

const initParticlesEngine = async (main) => {
await loadFull(main);
};

return (

<Particles
id="tsparticles"
init={initParticlesEngine}
options={particleConfig}
/>
)
}
export default Particle