# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) This will coordinate the interactions between user,views and model.
class BlogPostsController < ApplicationController
  def index
    # ---2) This assigns all blogpost objects the instance variable of @posts
    @posts = BlogPost.all
  end

  # ---3) This method will display further details on the post 
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) This will return a new pbject 
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) This allows you to create a new post. It'll return the new post and save it to the database
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6) This method is used to retrieve specific posts on the blog and allows you to edit it.
    @post = BlogPost.find(params[:id])
  end

  def update 
    @post = BlogPost.find(params[:id])
    # ---7)This method will allow you to update the blog post . It is used with edit accordingly by editing the object ,saving it and updating the record with the new edit/value.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8)This allows you to delete a specfic post from the blog. 
      redirect_to blog_posts_path
    end
  end

  # ---9) This as it says make the post private by making it only viewable by being called in the current class.
  private
  def blog_post_params
    # ---10)This just makes it so that each post object requires certain parameters in this case being title & content. If those are not fulfilled then it should just return an error
    params.require(:blog_post).permit(:title, :content)
  end
end
