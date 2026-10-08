type ProfileCardProps = {
    name: string;
    bio: string;
    email: string;
    github: string;
};

function ProfileCard({ name, bio, email, github }: ProfileCardProps){
    return (
        <section className="card">
            <h2>{name}</h2>
            <p>{bio}</p>
            <div className="links">
                <a href={`mailto:${email}`}>Email</a>
                <a href={github}>GitHub</a>
            </div>    
        </section>
    );
}

export default ProfileCard;