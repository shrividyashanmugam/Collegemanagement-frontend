


export default function AdminGrid({data}) {
    return (
        <div className="Container">
            <h2 className='title'>Admin Grid</h2>
            <div className="grid-container">
                {data?.map(admin => (  
                    <div key={admin?.id} className="admin-card">
                        <h1 className='card'>{admin?.name}</h1>
                        <p>{admin?.destination}</p>
                        <p>{admin?.Experience}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
