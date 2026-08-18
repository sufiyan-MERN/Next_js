export default async function Restaurant({params}) {
    const {resId}= await params
    return <div>
        <h1>{resId} page</h1>
    </div>
}