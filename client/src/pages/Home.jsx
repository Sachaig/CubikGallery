import { useInView } from 'react-intersection-observer';

import "../styles/Home.css";

export default function Home() {
    const [inViewRef, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

    return (
        <>
            <h1 ref={inViewRef} className={`herosection-h1 fade-in ${inView ? 'visible' : ''}`}>
                Des créations sur mesure
            </h1>
            <h2 className={`herosection-h2 fade-in ${inView ? 'visible' : ''}`}>
                Retrouvez nos oeuvres originales pour apporter une touche unique et
                authentique à votre intérieur
            </h2>

            <p>
                Lorem ipsum dolor, sit amet <br /> <br /><br />consectetur adipisicing elit. Quae quas <br />non quidem esse id assumenda ad aliquam itaque sapiente. Dolores commodi magni iusto veritatis debitis hic aut accusantium corrupti nam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ea dolores sed iste cumque quis iure illum pariatur optio voluptatem! Ab adipiscibr
                <br /><br /><br /><br /><br /><br /><br /> qui a corrupti suscipit beatae voluptatem officiis. Perspiciatis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae velit, quibusdam totam dolores voluptatum consequuntur inventore placeat ducimus culpa, delectus incidunt commodi sit veniam porro minima perferendis sed voluptate. Adipisci?
            </p>
        </>
    );
}
