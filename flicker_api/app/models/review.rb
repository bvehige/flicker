class Review < ApplicationRecord
  belongs_to :flick
  has_many :comments
end
