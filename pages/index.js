import { useEffect, useState } from 'react';
import fs from 'fs';
import path from 'path';

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'data.json');
    const jsonString = fs.readFileSync(filePath, 'utf8');
    const jsonContent = JSON.parse(jsonString);

    return {
        props: {
            text: jsonContent.text,
        },
    };
}

function Home({ text }) {
    const [updatedString, setUpdatedString] = useState('');

    useEffect(() => {
        const updated = text.replace(/(<ads><\/ads>)/, '<ads>haha</ads>');
        setUpdatedString(updated);
    }, [text]);

    return (
        <div>
            <h1>Updated String:</h1>
            <p>{updatedString}</p>
        </div>
    );
}

export default Home;
