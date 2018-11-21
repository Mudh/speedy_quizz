<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\UserInterface;

/**
 * @ORM\Table(name="app_users")
 * @ORM\Entity(repositoryClass="App\Repository\UserRepository")
 */
class User implements UserInterface
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=180, unique=true)
     */
    private $username;

    /*
    généré automatiquement avec le make:user
         @ORM\Column(type="json")

        private $roles = [];
    */

    /**
     * @var string The hashed password
     * @ORM\Column(type="string")
     */
    private $password;

    /**
     * @ORM\Column(type="string", length=200)
     */
    private $firstname;

    /**
     * @ORM\Column(type="string", length=200)
     */
    private $lastname;

    /**
     * @ORM\Column(type="string", length=200)
     */
    private $email;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $description;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $birthday;

    /**
     * @ORM\Column(type="integer")
     */
    private $nb_games;

    /**
     * @ORM\Column(type="integer")
     */
    private $nb_points;

    /**
     * @ORM\Column(type="boolean")
     */
    private $is_active;

    /**
     * @ORM\Column(type="datetime")
     */
    private $created_at;

    /**
     * @ORM\Column(type="datetime")
     */
    private $updated_time;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Role", inversedBy="users", cascade={"persist"})
     */
    private $role;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Question", mappedBy="user")
     */
    private $question;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Joker", inversedBy="users")
     */
    private $joker;

    public function __construct()
    {
        $this->question = new ArrayCollection();
        $this->joker = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUsername(): string
    {
        return (string) $this->email;
    }

    public function setUsername(string $username): self
    {
        $this->username = $username;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getPassword(): string
    {
        return (string) $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getSalt()
    {
        // not needed when using the "bcrypt" algorithm in security.yaml
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    public function getFirstname(): ?string
    {
        return $this->firstname;
    }

    public function setFirstname(string $firstname): self
    {
        $this->firstname = $firstname;

        return $this;
    }

    public function getLastname(): ?string
    {
        return $this->lastname;
    }

    public function setLastname(string $lastname): self
    {
        $this->lastname = $lastname;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getBirthday(): ?\DateTimeInterface
    {
        return $this->birthday;
    }

    public function setBirthday(?\DateTimeInterface $birthday): self
    {
        $this->birthday = $birthday;

        return $this;
    }

    public function getNbGames(): ?int
    {
        return $this->nb_games;
    }

    public function setNbGames(int $nb_games): self
    {
        $this->nb_games = $nb_games;

        return $this;
    }

    public function getNbPoints(): ?int
    {
        return $this->nb_points;
    }

    public function setNbPoints(int $nb_points): self
    {
        $this->nb_points = $nb_points;

        return $this;
    }

    public function getIsActive(): ?bool
    {
        return $this->is_active;
    }

    public function setIsActive(bool $is_active): self
    {
        $this->is_active = $is_active;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->created_at;
    }

    public function setCreatedAt(\DateTimeInterface $created_at): self
    {
        $this->created_at = $created_at;

        return $this;
    }

    public function getUpdatedTime(): ?\DateTimeInterface
    {
        return $this->updated_time;
    }

    public function setUpdatedTime(\DateTimeInterface $updated_time): self
    {
        $this->updated_time = $updated_time;

        return $this;
    }

    public function getRole(): ?Role
    {
        return $this->role;
    }

    public function setRole(?Role $role): self
    {
        $this->role = $role;

        return $this;
    }

    /**
     * @return Collection|Question[]
     */
    public function getQuestion(): Collection
    {
        return $this->question;
    }

    public function addQuestion(Question $question): self
    {
        if (!$this->question->contains($question)) {
            $this->question[] = $question;
            $question->setUser($this);
        }

        return $this;
    }

    public function removeQuestion(Question $question): self
    {
        if ($this->question->contains($question)) {
            $this->question->removeElement($question);
            // set the owning side to null (unless already changed)
            if ($question->getUser() === $this) {
                $question->setUser(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Joker[]
     */
    public function getJoker(): Collection
    {
        return $this->joker;
    }

    public function addJoker(Joker $joker): self
    {
        if (!$this->joker->contains($joker)) {
            $this->joker[] = $joker;
        }

        return $this;
    }

    public function removeJoker(Joker $joker): self
    {
        if ($this->joker->contains($joker)) {
            $this->joker->removeElement($joker);
        }

        return $this;
    }

    public function __toString()
    {
        return $this->username;
    }
}
