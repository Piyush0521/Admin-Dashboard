import {Table, TableHead, TableBody, TableHeader, TableRow, TableCell, TableCaption} from '@/components/ui/table';
import Link from 'next/link';
import posts from '@/data/posts';
import { Post } from '@/types/posts';
import {EyeIcon} from 'lucide-react';

interface PostsTableProps{
    limit?: number;
    title?: string;
}

const PostsTable = ({limit, title}: PostsTableProps) => {

    // Sort  posts for latest dates
    const sortedPosts: Post[] = [...posts].sort((a,b)=> new Date(b.date).getTime() - new Date(a.date).getTime());

    //Filter posts up to the limit
    const limitedPosts = limit ? sortedPosts.slice(0,limit) : sortedPosts;

    return ( 
        <div className='mt-10'>
            <h3 className="text-2xl mb-4 font-semibold">
                {title ? title : 'Posts'}
                <Table>
                    <TableHeader>
                         <TableRow>
                            <TableHead>Title</TableHead>
                            <TableHead className='hidden md:table-cell'>Author</TableHead>
                            <TableHead className='hidden md:table-cell'>Date</TableHead>
                            <TableHead >View/ Edit</TableHead>
                         </TableRow>
                    </TableHeader>
                    <TableBody>
                        {limitedPosts.map((post) => (
                            <TableRow key={post.id}>
                                <TableCell>{post.title}</TableCell>
                                <TableCell className='hidden md:table-cell'>{post.author}</TableCell>
                                <TableCell className='hidden md:table-cell'>{post.date}</TableCell>
                                <TableCell >
                                    <Link href={`/posts/edit/${post.id}`} ><EyeIcon className='text-blue-500 hover:text-blue-800'/></Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </h3>
        </div>
     );
}
 
export default PostsTable;