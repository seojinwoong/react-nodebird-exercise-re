import AppLayout from "../components/AppLayout";
import Head from 'next/head';

const Profile = () => {
    return (
        <>
            <Head>
                <title>NodeBirdExercise - 내 프로필</title>
            </Head>
            <AppLayout>
                <div>프로필 페이지</div>
            </AppLayout>
        </>
    )
};
export default Profile;