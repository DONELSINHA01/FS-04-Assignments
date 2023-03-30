import Image from './Image';

const UserData=({users})=>{
    return(
        <>
        {
            users.map((curUser)=>{
                const {picture,name,email,gender,location}= curUser;
                return (
                    <tr>
                        <td><Image image={picture.large}/></td>
                        <td>{name.first}</td>
                        <td>{email}</td>
                        <td>{gender}</td>
                        <td>{location.city}</td>
                    </tr>
                )
            })
        }
        </>
    );
}

export default UserData;