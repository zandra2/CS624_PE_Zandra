# # import numpy as numpy
# import matplotlib.pyplot as plt
# from PIL import Image, ImageOps, ImageFilter, ImageEnhance
# # %matplotlib inline

# img = Image.open('input.jpg')

# # Different ways to apply image filters
# img = img.filter(ImageFilter.DETAIL)
# img = img.filter(ImageFilter.SHARPEN)
# img = img.filter(ImageFilter.MedianFilter())
# img = img.filter(ImageFilter.UnsharpMask(5.0, 200, 50))

# #Histogram equalization from ImageOps
# img = ImageOps.equalize(img)

# #Using Enhancer
# img = ImageEnhance.Sharpness(img).enhance(-2.0)
# img.save('output2.jpg')

# plt.imshow(img)


#***REVISED VERSION***
import matplotlib.pyplot as plt
from PIL import Image, ImageOps, ImageFilter, ImageEnhance
# %matplotlib inline  # Uncomment if in Jupyter

img = Image.open('input.jpg')

# Apply multiple filters step-by-step
img = img.filter(ImageFilter.DETAIL)
img = img.filter(ImageFilter.SHARPEN)
img = img.filter(ImageFilter.MedianFilter())  # Optional: size=3
img = img.filter(ImageFilter.UnsharpMask(radius=5.0, percent=200, threshold=50))

# Histogram equalization
img = ImageOps.equalize(img)

# Enhance sharpness
img = ImageEnhance.Sharpness(img).enhance(2.0)

# Save new image result
img.save('output3.jpg')

# Display
plt.imshow(img)
plt.axis('off')
plt.show()
