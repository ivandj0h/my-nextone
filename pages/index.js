import { useEffect, useState } from 'react';
import fs from 'fs';
import path from 'path';

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'data.json');
    const jsonString = fs.readFileSync(filePath, 'utf8');
    const jsonContent = JSON.parse(jsonString);

    return {
        props: {
            dataArray: jsonContent,
        },
    };
}

function Home({ dataArray }) {
    const [updatedStrings, setUpdatedStrings] = useState([]);

    useEffect(() => {
        const updated = dataArray.map((item) =>
            item.text.replace(/(<ads><\/ads>)/, '<ads>haha</ads>')
        );
        setUpdatedStrings(updated);
    }, [dataArray]);

    return (
        <div>
            <h1>Updated Strings:</h1>
            <ul>
                {updatedStrings.map((string, index) => (
                    <li key={index}>{string}</li>
                ))}
            </ul>
        </div>
    );
}

export default Home;
