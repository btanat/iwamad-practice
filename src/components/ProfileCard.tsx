import LikeButton from './LikeButton'
import { useLikes } from '../context/LikesContext'

type ProfileCardProps = {
    name: string;
    bio: string;
    email: string;
    github: string;
};

function ProfileCard({ name, bio, email, github }: ProfileCardProps){
    const { likes } = useLikes()

    return (
        <section className={likes > 0 ? 'card is-liked' : 'card'}>
            <h2>{name}</h2>
            <p>{bio}</p>
            <div className="links">
                <a href={`mailto:${email}`}>Email</a>
                <a href={github}>GitHub</a>
            </div>
            <LikeButton />
        </section>
    );
}

export default ProfileCard;