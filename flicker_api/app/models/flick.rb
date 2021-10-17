class Flick < ApplicationRecord
    has_many :reviews
    
    validates :image, uniqueness: true
end
