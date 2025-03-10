import React from 'react';
import { Container, Typography, Box, Card, CardContent, CardActions, Button } from '@mui/material';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "İlk Blog Yazım",
      excerpt: "Bu benim ilk blog yazım. React ve web geliştirme hakkında deneyimlerimi paylaşacağım.",
      date: "10 Mart 2024"
    },
    {
      id: 2,
      title: "Frontend Development",
      excerpt: "Modern frontend teknolojileri ve best practice'ler hakkında bilgiler.",
      date: "11 Mart 2024"
    }
  ];

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h3" align="center" gutterBottom sx={{ color: '#1976d2' }}>
        Blog Yazılarım
      </Typography>
      
      {blogPosts.map((post) => (
        <Card key={post.id} sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
              {post.title}
            </Typography>
            <Typography variant="body1" paragraph sx={{ color: 'gray' }}>
              {post.excerpt}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {post.date}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary" href={`/blog/${post.id}`}>
              Devamını Oku
            </Button>
          </CardActions>
        </Card>
      ))}
    </Container>
  );
};

export default Blog;
// Compare this snippet from portfolio-frontend/src/pages/contact.js: