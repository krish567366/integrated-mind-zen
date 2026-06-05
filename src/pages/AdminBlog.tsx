import { useState, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import article1Image from "@/assets/article1.jpeg";
import article2Image from "@/assets/article2.jpeg";
import article3Image from "@/assets/article3.jpeg";
import article4Image from "@/assets/article4.jpeg";
import article5Image from "@/assets/article5.jpeg";
import article6Image from "@/assets/article6.jpeg";

const ARTICLE_IMAGES: Record<number, string> = {
  1: article1Image,
  2: article2Image,
  3: article3Image,
  4: article4Image,
  5: article5Image,
  6: article6Image,
};
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Plus, Edit, Trash2, Eye, Save, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  date: string;
  image?: string;
  published: boolean;
}

const AdminBlog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");
  const [isDragOver, setIsDragOver] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "",
    readTime: "",
    image: "",
    published: false,
  });
  const { toast } = useToast();

  // Handle file selection
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  // Handle drag and drop
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      processFile(file);
    }
  };

  // Process selected or dropped file
  const processFile = (file: File) => {
    // Validate file type
    if (!file.type.startsWith('image/')) {
      toast({
        title: "Invalid file type",
        description: "Please select an image file.",
        variant: "destructive",
      });
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Please select an image smaller than 5MB.",
        variant: "destructive",
      });
      return;
    }

    setSelectedFile(file);

    // Create preview
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      setImagePreview(result);
      setFormData({ ...formData, image: result });
    };
    reader.readAsDataURL(file);
  };

  // Clear selected file
  const clearFile = () => {
    setSelectedFile(null);
    setImagePreview("");
    setFormData({ ...formData, image: "" });
  };

  // Load posts from localStorage on component mount
  useEffect(() => {
    const savedPosts = localStorage.getItem("blogPosts");
    if (savedPosts) {
      const posts = JSON.parse(savedPosts).map((post: BlogPost) =>
        ARTICLE_IMAGES[post.id] ? { ...post, image: ARTICLE_IMAGES[post.id] } : post,
      );
      setPosts(posts);
    } else {
      // Initialize with default posts if none exist
      const defaultPosts = [
        {
          id: 1,
          title: "How to attain a Tranquil mind",
          excerpt: "What to do when anxious, compulsive thoughts steal your peace and impair your quality of life? Discover the step-by-step path to cultivating a calm and balanced mind through witnessing, meditation, and equanimity.",
          content: `What to do when anxious, compulsive thoughts steal your peace and impair your quality of life?

Our mind is always going through pros and cons, brooding over this or that, arguing for and against, comparing and judging.

Can we attain a state that is free from all disturbances and argumentation, a state of tranquillity in which our mind becomes calm and balanced?

Yes, we can!



Step 1  Witness objects moving in the field of mind
Often people try to eliminate thoughts from the mind, this can be exhausting. Learn instead to be a neutral witness of the objects moving in the mind field.
To quiet the mind does not mean suppressing or repressing thoughts and emotions, rather learn the skill of witnessing and letting go.
Allow the thought patterns to flow without interruption, remain a witness, do not engage, entertain or entangle with the thoughts, watch them flow.
Here's how to do it…

Step 2  Break the habit of the mind
Stop connecting thoughts.
Our mind has a natural tendency to connect the thoughts as they arise, we mostly do that with negative thoughts, a single negative thought leads to another and another and another, soon it becomes a stream of stressful thoughts. It stirs up past memories, awakens negative emotions and before we know it we are in the grip of a thought pattern that leaves us powerless.

Step 3  Meditate for 21 minutes*
Develop a new habit, a habit of letting go of thoughts when they arise. By developing one, single new skill of simply letting the thoughts pass by when they arise you will learn to become a witness to the thoughts.

Sit in meditation and intentionally watch your thoughts moment by moment. Watch every single thought arise and consciously watch that thought drift away.

* one energy cycle is 21 mins; 21 minutes is ideal for establishing a new pattern.
 
Note: You will slip and have to start over.
This kind of experience is normal; whenever we start anything new, a new practice, habit or routine we slip and have to restart.

The first few times you practice this technique you'll fail. It's pretty much guaranteed to happen. The good news is, with a little persistence and commitment it will happen, and you'll soon start loving it. One of the damaging myth about meditation is the belief that it is difficult and requires lots of practice. It's not true, meditation is simple, easy and effortless. Drop the effort and it will just happen!

Step 4  Inspect your thoughts
Once you learn to witness the thoughts, the next skill that you will gradually develop through meditation is the ability to inspect your thoughts and decide which are helpful and which are not helpful for your growth.

The ability to inspect thought patterns is the key skill in weakening the deep impressions of unconscious negative thought patterns that normally, invisibly lead to actions that cause failure and suffering in our life.

Step 5  Promote helpful thoughts
Once you discriminate between helpful and not helpful thought patterns, reinforce useful, positive thoughts intentionally through willpower and persistence.
Powerful positive thoughts turned into action reinforce new habits of thinking and lead to positive results.

Step 6  Do nothing with that which is not useful
How do you deal with negative thoughts that do not support your growth and wellbeing?

Do nothing with them.
Simply do not engage with them, neither feed them nor push them away. By focusing on helpful thoughts attention and energy are automatically withdrawn from the negative, unhelpful thoughts, they lose power over our emotions and actions and gradually fade away.

There's more…
 
Resting on the foundation of the skills of witnessing, inspecting and promoting positive thought patterns is the greatest skill of all –
Equanimity – not allowing yourself to be disturbed in any situation. This means that even though you may evaluate a situation to be 'bad', you remain calm and do not get disturbed, similarly, if you judge the situation to be 'good', you still remain calm and do not get needlessly drawn into excitement, pride or ego. The situation by itself is neither good or bad, we make it so by our thinking.
It does not mean being emotionless, rather, the quality of not being disturbed means having a subtle balance; not getting sucked into emotion for an extended period of time and staying centered.`,
          category: "Mindfulness",
          readTime: "10 min read",
          date: "Jan 12, 2026",
          image: article1Image,
          published: true,
        },
        {
          id: 2,
          title: "5 Morning Rituals for Emotional Balance",
          excerpt: "Start your day with intention using these simple yet powerful practices that set the tone for emotional well-being.",
          content: "Full content here...",
          category: "Wellness",
          readTime: "5 min read",
          date: "Nov 25, 2024",
          image: article2Image,
          published: true,
        },
        {
          id: 3,
          title: "Understanding Cognitive Distortions",
          excerpt: "Learn to identify the common thinking patterns that create unnecessary suffering and discover how to transform them.",
          content: "Full content here...",
          category: "Cognitive Science",
          readTime: "8 min read",
          date: "Nov 18, 2024",
          image: article3Image,
          published: true,
        },
      ];
      setPosts(defaultPosts);
      localStorage.setItem("blogPosts", JSON.stringify(defaultPosts));
    }
  }, []);

  // Save posts to localStorage whenever posts change
  useEffect(() => {
    localStorage.setItem("blogPosts", JSON.stringify(posts));
  }, [posts]);

  const resetForm = () => {
    setFormData({
      title: "",
      excerpt: "",
      content: "",
      category: "",
      readTime: "",
      image: "",
      published: false,
    });
    setSelectedFile(null);
    setImagePreview("");
  };

  const handleCreatePost = () => {
    if (!formData.title || !formData.excerpt || !formData.content) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    const newPost: BlogPost = {
      id: Date.now(),
      ...formData,
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
    };

    setPosts([newPost, ...posts]);
    setIsCreateDialogOpen(false);
    resetForm();
    toast({
      title: "Success",
      description: "Article created successfully!",
    });
  };

  const handleEditPost = (post: BlogPost) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      category: post.category,
      readTime: post.readTime,
      image: post.image || "",
      published: post.published,
    });
    setSelectedFile(null);
    setImagePreview(post.image || "");
  };

  const handleUpdatePost = () => {
    if (!formData.title || !formData.excerpt || !formData.content) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    if (!editingPost) return;

    const updatedPost: BlogPost = {
      ...editingPost,
      ...formData,
    };

    setPosts(posts.map(post => post.id === editingPost.id ? updatedPost : post));
    setEditingPost(null);
    resetForm();
    toast({
      title: "Success",
      description: "Article updated successfully!",
    });
  };

  const handleDeletePost = (postId: number) => {
    setPosts(posts.filter(post => post.id !== postId));
    toast({
      title: "Success",
      description: "Article deleted successfully!",
    });
  };

  const togglePublishStatus = (postId: number) => {
    setPosts(posts.map(post =>
      post.id === postId ? { ...post, published: !post.published } : post
    ));
  };

  const categories = ["Mindfulness", "Wellness", "Cognitive Science", "Self-Care", "Meditation", "Psychology"];

  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-heading font-semibold text-foreground mb-2">
              Article Management
            </h1>
            <p className="text-muted-foreground">
              Create, edit, and manage your articles
            </p>
          </div>

          <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
            <DialogTrigger asChild>
              <Button className="flex items-center gap-2">
                <Plus className="w-4 h-4" />
                New Post
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Create New Article</DialogTitle>
                <DialogDescription>
                  Fill in the details for your new article.
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="title">Title *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="Enter article title"
                  />
                </div>

                <div>
                  <Label htmlFor="excerpt">Excerpt *</Label>
                  <Textarea
                    id="excerpt"
                    value={formData.excerpt}
                    onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                    placeholder="Brief description of the post"
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="content">Content *</Label>
                  <Textarea
                    id="content"
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    placeholder="Full article content"
                    rows={10}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="category">Category</Label>
                    <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="readTime">Read Time</Label>
                    <Input
                      id="readTime"
                      value={formData.readTime}
                      onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                      placeholder="e.g., 5 min read"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="image">Image</Label>
                  <div className="space-y-3">
                    {/* Drag and Drop Zone */}
                    <div
                      className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors cursor-pointer ${
                        isDragOver
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/50'
                      }`}
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      onClick={() => document.getElementById('file-upload')?.click()}
                    >
                      <div className="space-y-2">
                        <div className="mx-auto w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                          <svg className="w-6 h-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-medium">
                            {isDragOver ? 'Drop image here' : 'Click to upload or drag and drop'}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            PNG, JPG, GIF up to 5MB
                          </p>
                        </div>
                      </div>
                      <input
                        id="file-upload"
                        type="file"
                        accept="image/*"
                        onChange={handleFileSelect}
                        className="hidden"
                      />
                    </div>

                    {/* OR separator */}
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-px bg-border"></div>
                      <span className="text-xs text-muted-foreground">OR</span>
                      <div className="flex-1 h-px bg-border"></div>
                    </div>

                    {/* URL Input */}
                    <div>
                      <Label htmlFor="image-url" className="text-sm text-muted-foreground">Image URL</Label>
                      <Input
                        id="image-url"
                        type="url"
                        value={formData.image && !selectedFile ? formData.image : ""}
                        onChange={(e) => {
                          setFormData({ ...formData, image: e.target.value });
                          if (e.target.value) {
                            setSelectedFile(null);
                            setImagePreview("");
                          }
                        }}
                        placeholder="https://example.com/image.jpg"
                        disabled={!!selectedFile}
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        Enter a URL for the article image
                      </p>
                    </div>

                    {/* Preview */}
                    {imagePreview && (
                      <div className="mt-3">
                        <Label className="text-sm text-muted-foreground">Preview</Label>
                        <div className="relative inline-block mt-2">
                          <img
                            src={imagePreview}
                            alt="Preview"
                            className="max-w-32 max-h-32 object-cover rounded border"
                          />
                          <button
                            type="button"
                            onClick={clearFile}
                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-600"
                          >
                            ×
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="published"
                    checked={formData.published}
                    onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                  />
                  <Label htmlFor="published">Publish immediately</Label>
                </div>
              </div>

              <div className="flex justify-end gap-2 mt-6">
                <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleCreatePost}>
                  <Save className="w-4 h-4 mr-2" />
                  Create Post
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Articles List */}
        <div className="grid gap-6">
          {posts.map((post) => (
            <Card key={post.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                    <CardDescription className="flex items-center gap-4 text-sm">
                      <span>{post.category}</span>
                      <span>{post.readTime}</span>
                      <span>{post.date}</span>
                      <span className={`px-2 py-1 rounded text-xs ${
                        post.published ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {post.published ? 'Published' : 'Draft'}
                      </span>
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => togglePublishStatus(post.id)}
                    >
                      {post.published ? 'Unpublish' : 'Publish'}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEditPost(post)}
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="outline" size="sm">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Delete Article</AlertDialogTitle>
                          <AlertDialogDescription>
                            Are you sure you want to delete "{post.title}"? This action cannot be undone.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction onClick={() => handleDeletePost(post.id)}>
                            Delete
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    {post.content.length} characters
                  </span>
                  <Button variant="ghost" size="sm">
                    <Eye className="w-4 h-4 mr-2" />
                    Preview
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Edit Dialog */}
        <Dialog open={!!editingPost} onOpenChange={() => setEditingPost(null)}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Edit Article</DialogTitle>
              <DialogDescription>
                Make changes to your article.
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4">
              <div>
                <Label htmlFor="edit-title">Title *</Label>
                <Input
                  id="edit-title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Enter blog post title"
                />
              </div>

              <div>
                <Label htmlFor="edit-excerpt">Excerpt *</Label>
                <Textarea
                  id="edit-excerpt"
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  placeholder="Brief description of the post"
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="edit-content">Content *</Label>
                <Textarea
                  id="edit-content"
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  placeholder="Full blog post content"
                  rows={10}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="edit-category">Category</Label>
                  <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="edit-readTime">Read Time</Label>
                  <Input
                    id="edit-readTime"
                    value={formData.readTime}
                    onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                    placeholder="e.g., 5 min read"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="edit-image">Image</Label>
                <div className="space-y-3">
                  {/* Drag and Drop Zone */}
                  <div
                    className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors cursor-pointer ${
                      isDragOver
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary/50'
                    }`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={() => document.getElementById('edit-file-upload')?.click()}
                  >
                    <div className="space-y-2">
                      <div className="mx-auto w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                        <svg className="w-6 h-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium">
                          {isDragOver ? 'Drop image here' : 'Click to upload or drag and drop'}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          PNG, JPG, GIF up to 5MB
                        </p>
                      </div>
                    </div>
                    <input
                      id="edit-file-upload"
                      type="file"
                      accept="image/*"
                      onChange={handleFileSelect}
                      className="hidden"
                    />
                  </div>

                  {/* OR separator */}
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-px bg-border"></div>
                    <span className="text-xs text-muted-foreground">OR</span>
                    <div className="flex-1 h-px bg-border"></div>
                  </div>

                  {/* URL Input */}
                  <div>
                    <Label htmlFor="edit-image-url" className="text-sm text-muted-foreground">Image URL</Label>
                    <Input
                      id="edit-image-url"
                      type="url"
                      value={formData.image && !selectedFile ? formData.image : ""}
                      onChange={(e) => {
                        setFormData({ ...formData, image: e.target.value });
                        if (e.target.value) {
                          setSelectedFile(null);
                          setImagePreview("");
                        }
                      }}
                      placeholder="https://example.com/image.jpg"
                      disabled={!!selectedFile}
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Enter a URL for the blog post image
                    </p>
                  </div>

                  {/* Preview */}
                  {imagePreview && (
                    <div className="mt-3">
                      <Label className="text-sm text-muted-foreground">Preview</Label>
                      <div className="relative inline-block mt-2">
                        <img
                          src={imagePreview}
                          alt="Preview"
                          className="max-w-32 max-h-32 object-cover rounded border"
                        />
                        <button
                          type="button"
                          onClick={clearFile}
                          className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-600"
                        >
                          ×
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="edit-published"
                  checked={formData.published}
                  onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                />
                <Label htmlFor="edit-published">Published</Label>
              </div>
            </div>

            <div className="flex justify-end gap-2 mt-6">
              <Button variant="outline" onClick={() => setEditingPost(null)}>
                Cancel
              </Button>
              <Button onClick={handleUpdatePost}>
                <Save className="w-4 h-4 mr-2" />
                Update Post
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </Layout>
  );
};

export default AdminBlog;