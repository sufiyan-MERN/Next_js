export default async function Drive({params}){
    const {folderId}= await params
    console.log(folderId)
    return <div>
         Google Drive: {JSON.stringify(folderId)}
    </div>
}