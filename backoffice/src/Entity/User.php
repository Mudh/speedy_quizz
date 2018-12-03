<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use JMS\Serializer\Annotation as JMS;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

/**
 * @ORM\Table(name="app_users")
 * @ORM\Entity(repositoryClass="App\Repository\UserRepository")
 * @UniqueEntity(
 *  fields={"email"},
 *  message="Cet email est déjà utilisé; connectez-vous")
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
     * @Assert\NotBlank(message="Merci d'entrer votre pseudo")
     * @Assert\Length(
     * min = 3,
     * minMessage="Merci d'entrer un pseudo d'au moins 3 caractères",
     * max = 25,
     * maxMessage="Votre pseudo ne peut pas faire + de 25 caractères"
     * )
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
     * @Assert\NotBlank(message="Le mot de passe ne peut pas être vide")
     * @Assert\Length(
     *     min = 5,
     *     minMessage="Merci d'entrer un mot de passe d'au moins 5 caractères",
     *     max = 255,
     *     maxMessage="Votre mot de passe ne peut pas faire + de 30 caractères"
     * )
     */
    private $password;

    /**
     * @ORM\Column(type="string", length=200)
     * @Assert\NotBlank(message="Merci d'entrer votre prénom")
     * @Assert\Length(
     *    max = 50,
     *    maxMessage="Prénom trop long"
     * )
     */
    private $firstname;

    /**
     * @ORM\Column(type="string", length=200)
     * @Assert\NotBlank(message="Merci d'entrer votre nom")
     * @Assert\Length(
     *    max = 70,
     *    maxMessage="Nom trop long"
     * )
     */
    private $lastname;

    /**
     * @ORM\Column(type="string", length=200)
     * @Assert\Email(
     *     message = "Merci d'entrer un email valide !",
     * )
     * @Assert\NotBlank(message="L'adresse email ne peut pas être vide")
     * @Assert\Length(
     *    max = 150,
     *    maxMessage="email trop long"
     * )
     */
    private $email;

    /**
     * @ORM\Column(type="text", nullable=true)
     * @Assert\Length(
     *    max = 500,
     *    maxMessage="Description trop longue"
     * )
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
     * @ORM\Column(type="integer")
     */
    private $joker_skip;

    /**
     * @ORM\Column(type="integer")
     */
    private $joker_revive;

    /**
     * @ORM\Column(type="integer")
     */
    private $joker_5050;

    /**
     * @ORM\Column(type="integer")
     */
    private $joker_timer;

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


    public function __construct()
    {
        $this->question = new ArrayCollection();
        $this->joker_skip = 2;
        $this->joker_5050 = 2;
        $this->joker_revive = 2;
        $this->joker_timer = 2;
        $this->nb_games = 2;
        $this->nb_points = 0;
        $this->is_active = 1;
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
        return (string) $this->username;
    }

    public function setUsername($username)
    {
        $this->username = $username;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        return [$this->role->getCoderole()];
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

    public function setFirstname($firstname)
    {
        $this->firstname = $firstname;

        return $this;
    }

    public function getLastname(): ?string
    {
        return $this->lastname;
    }

    public function setLastname($lastname)
    {
        $this->lastname = $lastname;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail($email)
    {
        $this->email = $email;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription($description)
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
     * Get the value of joker_skip
     */ 
    public function getJokerSkip()
    {
        return $this->joker_skip;
    }

    /**
     * Set the value of joker_skip
     *
     * @return  self
     */ 
    public function setJokerSkip($joker_skip)
    {
        $this->joker_skip = $joker_skip;

        return $this;
    }

    /**
     * Get the value of joker_revive
     */ 
    public function getJokerRevive()
    {
        return $this->joker_revive;
    }

    /**
     * Set the value of joker_revive
     *
     * @return  self
     */ 
    public function setJokerRevive($joker_revive)
    {
        $this->joker_revive = $joker_revive;

        return $this;
    }

    /**
     * Get the value of joker_5050
     */ 
    public function getJoker5050()
    {
        return $this->joker_5050;
    }

    /**
     * Set the value of joker_5050
     *
     * @return  self
     */ 
    public function setJoker5050($joker_5050)
    {
        $this->joker_5050 = $joker_5050;

        return $this;
    }

    /**
     * Get the value of joker_timer
     */ 
    public function getJokerTimer()
    {
        return $this->joker_timer;
    }

    /**
     * Set the value of joker_timer
     *
     * @return  self
     */ 
    public function setJokerTimer($joker_timer)
    {
        $this->joker_timer = $joker_timer;

        return $this;
    }

    public function __toString()
    {
        return $this->username;
    }
}
