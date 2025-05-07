# Part 2
from PIL import Image, ImageEnhance, ImageFilter, ImageOps
import matplotlib.pyplot as plt

# Load the input image
img = Image.open("PE05-input.jpg") 

# Convert to grayscale to enhance contrast better
gray_img = img.convert("L")

# Apply histogram equalization to improve contrast
equalized_img = ImageOps.equalize(gray_img)

# Apply UnsharpMask to bring out details
sharpened_img = equalized_img.filter(ImageFilter.UnsharpMask(radius=2.0, percent=150, threshold=3))

# Optionally enhance contrast slightly more
enhanced_img = ImageEnhance.Contrast(sharpened_img).enhance(1.2)

# Convert back to RGB for display and saving
final_img = enhanced_img.convert("RGB")

# Save the final image
final_img.save("improved_PE05_output.jpg")

# Display the result
plt.imshow(final_img)
plt.axis("off")
plt.show()