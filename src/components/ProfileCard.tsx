import { useState } from 'react'

type ProfileCardProps = {
    name: string;
    bio: string;
    email: string;
    github: string;
};

function ProfileCard({ name, bio, email, github }: ProfileCardProps){
    const [liked, setLiked] = useState(false);

    return (
        <section className={liked ? 'card is-liked' : 'card'}>
            <h2>{name}</h2>
            <p>{bio}</p>
            <div className="links">
                <a href={`mailto:${email}`}>Email</a>
                <a href={github}>GitHub</a>
            </div>
            <button onClick={() => setLiked(!liked)}>
                {liked ? '♥ Liked' : '♡ Like'}
            </button>    
        </section>
    );
}

export default ProfileCard;