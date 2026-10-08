import { useState } from 'react';
import SkillBadge from './SkillBadge';
import type { Skill } from '../types';

type ProfileCardProps = {
    name: string;
    bio: string;
    email: string;
    github: string;
    skills: Skill[];
};

function ProfileCard({ name, bio, email, github, skills  }: ProfileCardProps){
    const [liked, setLiked] = useState(false);

    return (
        <section className={liked ? 'card is-liked' : 'card'}>
            <h2>{name}</h2>
            <p>{bio}</p>
            {skills.length > 0 ? (
                <ul className="skills">
                    {skills.map((skill) => (
                        <SkillBadge key={skill.id} skill={skill} />
                    ))}
                </ul>
            ) : (
                <p>No skills added yet.</p>
            )}
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