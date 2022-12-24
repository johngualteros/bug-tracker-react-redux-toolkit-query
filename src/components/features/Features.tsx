import style from './Features.module.css';
import { AiFillCheckCircle } from 'react-icons/ai';

interface Feature {
    name: string;
    free: boolean;
    standard: boolean;
    pro: boolean;
}

const Features = () => {

    const featuresList : Feature[] = [
        { 
            name: 'User limit per site',
            free: true,
            standard: true,
            pro: true
        },
        { 
            name: 'BackLog',
            free: true,
            standard: true,
            pro: true
        },
        { 
            name: 'Reporting & insights',
            free: false,
            standard: true,
            pro: true
        },
        { 
            name: 'Project archiving',
            free: false,
            standard: false,
            pro: true
        },
        { 
            name: 'Capacity planning',
            free: false,
            standard: false,
            pro: true
        },
    ];
  return (
    <div className={style.container}>
        <h2>Compare features</h2>

        <table>
            <thead>
                <tr>
                    <th>Feature</th>
                    <th>Free</th>
                    <th>Standard</th>
                    <th>Pro</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>User limit per site</td>
                    <td>10 users</td>
                    <td>1000 users</td>
                    <td>Unlimited users</td>
                </tr>
                {
                    featuresList.map((feature, index) => (
                        <tr key={index}>
                            <td>{feature.name}</td>
                            <td>{feature.free ? <AiFillCheckCircle size={30} color="green"/> : ''}</td>
                            <td>{feature.standard ? <AiFillCheckCircle size={30} color="green"/> : ''}</td>
                            <td>{feature.pro ? <AiFillCheckCircle size={30} color="green"/> : ''}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default Features